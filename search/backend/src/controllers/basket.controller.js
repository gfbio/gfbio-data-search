const JSZip = require("jszip");
const fs = require("fs");
const axios = require("axios");

/**
 * Downloads the chosen datasets as a zip file.
 */
exports.basketDownload = async (req, res) => {
  try {
    const selectedBasket = req.body.basket;

    const zip = new JSZip();
    const axiosArray = [];
    let names = [];

    for (const result of selectedBasket) {
      // Metadata
      const identifier = result.dcIdentifier.replace(/[^\w]+/gi, "");
      zip.file(identifier + "_metadata.xml", result.xml);

      // Data
      if (result.linkage.data) {
        names.push("");
        const datalink = decodeURIComponent(result.linkage.data);

        axiosArray.push(
          axios.get(datalink, {
            responseType: "arraybuffer",
            headers: { "Content-Type": "text/plain; charset=x-user-defined" },
          })
        );
      }

      // Multimedia
      if (result.linkage.multimedia) {
        for (const multimediaItem of result.linkage.multimedia) {
          names.push(new URL(multimediaItem.url).pathname.split("/").pop());

          const multimedialink = decodeURIComponent(multimediaItem.url);

          axiosArray.push(
            axios.get(multimedialink, {
              responseType: "arraybuffer",
            })
          );
        }
      }
    }

    const axiosResponses = await axios.all(axiosArray);

    for (let i = 0; i < axiosResponses.length; i++) {
      if (axiosResponses[i].headers["content-disposition"]) {
        const regexp = /filename=(.*)/;
        zip.file(
          regexp.exec(axiosResponses[i].headers["content-disposition"])[1],
          Buffer.from(axiosResponses[i].data),
          { base64: false }
        );
      } else {
        zip.file(names[i], Buffer.from(axiosResponses[i].data), {
          base64: false,
        });
      }
    }

    const zipName = "gfbio_basket.zip";

    zip
      .generateNodeStream({ type: "nodebuffer", streamFiles: true })
      .pipe(fs.createWriteStream(zipName))
      .on("finish", function () {
        res.status(200).download(zipName, zipName);
      });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      msg: "Error",
      error: err.message,
    });
  }
};

/**
 * Adds a dataset to the basket.
 */
exports.addToBasket = (req, res) => {
  // Implement the logic to add a dataset to the basket here
  res.status(200).json({ msg: "Dataset added to the basket" });
};

/**
 * Returns the saved basket of the user.
 */
exports.readFromBasket = (req, res) => {
  // Implement the logic to read the user's basket here
  res.status(200).json({ msg: "Read user's basket" });
};
