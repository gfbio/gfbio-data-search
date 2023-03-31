- our gitlab repo https://gitlab-pe.gwdg.de/gfbio/search.gfbio.org
 - last commit 4 weeks ago by claas
 - local development for this scripted
 - DataSearchUI (actual search) included as submodul -> GITHub -> letzter commit von Sven Thiel 03.08.2022

 - DataSearchUIOwn ist lokale kopie/fork auf dem gearbeitet werden kann
    - linus has hier direkt in angular änderungen für das kachelfiltering gemacht

  
 - search-ui simple react app als wrapper um DataSearchUIOwn mit gfbio branding
 
 - start.sh
  - versteckt default navbar mittesl css sed
  - npm build auf DataSearchUIOwn
  - build search-ui
  - DataSearchUIOwn gebautes JS nach search-ui kopieren
  - css, fonts, bilder auch
  - docker restart
  
  - docker/frontend
   - Dockerfile mit build kommandos für DataSearchUIOwn ähnlich search-ui und einem Apache2 webserver
 
 - docker/backend
  - Dockerfile mit node server der app aus DataSearchUIOwn started
  
  
  -------------------------------
## DASS-571 build problems

- docker-compose build --no-cache
otherwise it seems that the backend is not build properly, the sourceso
of /node are not updated when using ./start.sh
- if then ./start.sh is executed the search ui is not shown in the browser
- the local variant, using ng serve or npm run start works










  -------------------------------
  
  
  - git fetch
  - git pull origin main
  - git submodule update --init --recursive
  
  PREVENTING start.sh
  
    export NODE_OPTIONS=--openssl-legacy-provider
        maweber@maweber-P17:devel/search.gfbio.org ‹main*›$ cd DatasetSearchUIOwn/angular/ && NG_CLI_ANALYTICS=ci npm i --legacy-peer-deps && npm run build && cd ../../
        node: --openssl-legacy-provider is not allowed in NODE_OPTIONS
     
    removing export fixes seemingly
    

  - sudo ./start.sh ??? wegen rechte by copy to build dir 

  - from docker logs gfbio_search_front 
  
        AH00558: httpd: Could not reliably determine the server's fully qualified domain name, using 172.26.0.3. Set the 'ServerName' directive globally to suppress this message
        
  - in browser -> http://172.26.0.3/ shows search locally




#### install Angular CLI

- sudo npm install -g @angular/cli

#### run locally with HOT reloading

- docker stack, see above, needs to be up and running
- in ./DatasetSearchUIOwn/angular
- ng serve UPDATE: there are start (npm run start) and build commands in package json that do provide dedicated server commands
- http://localhost:4200/


----------------------------------------------------------------------------------------------------

### NFDI4BIO-237:
 
 - checkbox to select items already there
 - Visualizable in VAT Filter available
 - select check-box seems to be availabe independened of VAT filter
 
 - ticking checkbox updates "Dataset Basket" count already
 - clicking basket open modal showing basket content
 - options to close, empty basket, download selection

 - download triggers download of zip file with basket content, with variable content like xml, images, other data
 - loading icon image request fails
        
        http://172.20.0.2/assets/gif/loading-icon.jpg

 - nothing in storage of browser found so far

 - search-result.component.ts
   - basketValues -> Array von Hits
     - checkBoxClick added oder removed hits
 
 - basket-dialog.component.ts
   - modal
     - functions for remove, download etc.
     - saveBasket():
     
               saveBasket(): void {
                  const basket = new Basket();
                  basket.setContent(this.data);
     - setContent -> JSON
     
                  basket.setUserId(this.user);
                  this.nodeService.addToBasket(basket).subscribe(val => {
                      this.basketId = JSON.stringify(val.basketId);
                  });
                  this.savedData = this.data.slice(0);
                }
