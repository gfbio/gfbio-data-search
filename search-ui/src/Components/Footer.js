import dfg_logo from "../images/dfg_logo_schriftzug_weiss_foerderung_en.gif";

export default function Footer(props) {

    return (
      <footer class="text-center">
        <div class="container">
          <div class="row">
            <div class="col-4">
              <div class="border-right pe-2">
                <h3>GFBio Consortium</h3>
                <p>
                  The German Federation for Biological Data (GFBio), a
                  sustainable,
                  service oriented,
                  national data infrastructure facilitating data
                  sharing
                  for
                  biological
                  and environmental research.
                </p>
              </div>
              <div class="mt-2">
                <a href="https://www.dfg.de/" target="_blank"
                   rel="noopener noreferrer">
                  <img src={dfg_logo}
                       width="300"/>
                </a>
              </div>
            </div>
    
            <div class="col-8">
              <div class="row">
                <div class="col-4 d-inline-block h-100 border-right">
                  <i class="mdi mdi-signal"></i>
                  <h4>Want to know more ?</h4>
                  <ul class="list-group">
                    <a class="list-group-item list-group-item-action"
                       href="https://www.gfbio.org/training">Training</a>
                    <a class="list-group-item list-group-item-action"
                       href="https://kb.gfbio.org/" target="_blank"
                       rel="noopener noreferrer">FAQ's</a>
                  </ul>
                </div>
    
                <div class="col-4 d-inline-block h-100 border-right">
                  <i class="mdi mdi-email-edit-outline"></i>
                  <h4>Got Questions ?</h4>
                  <ul class="list-group">
                    <a class="list-group-item list-group-item-action"
                       href="mailto:info@gfbio.org">Contact
                      Us !</a>
                  </ul>
                </div>
    
                <div class="col-4 d-inline-block h-100">
                  <i class="mdi mdi-login"></i>
                  <h4>Sign up !</h4>
                  <p>
                    Get full access to services and resources
                    deriving
                    benefit for
                    your Projects
                  </p>
                  <br />
                  <p>
                    <a href="https://sso.gfbio.org/simplesaml/module.php/accountui/register.php"
                       class="btn btn-primary btn-footer">Create an account !</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
    
        </div>
        

        <div class="container">
          <div class="row mid-row">
            <div class="col-3 mid-row-item">
              <i class="mdi mdi-pencil-ruler"></i>
              <h5>
                Plan
              </h5>
              <p>
                Prepare a custom Data Management Plan (DMP).
              </p>
              <a class="stretched-link" href="https://dmp.gfbio.org"
                 target="_blank"
                 rel="noopener noreferrer"></a>
            </div>
    
            <div class="col-3 mid-row-item">
              <i class="mdi mdi-upload"></i>
              <h5>
                Submit
              </h5>
              <p>
                Submit your data to GFBio.
              </p>
              <a class="stretched-link"
                 href="https://submissions.gfbio.org" target="_blank"
                 rel="noopener noreferrer"></a>
            </div>
    
            <div class="col-3 mid-row-item">
              <i class="mdi mdi-magnify"></i>
              <h5>
                Search
              </h5>
              <p>
                Search the GFBio data pool.
              </p>
              <a class="stretched-link" href="https://search.gfbio.org"
                 target="_blank"
                 rel="noopener noreferrer"></a>
            </div>
    
            <div class="col-3 mid-row-item">
              <i class="mdi mdi-map-plus"></i>
              <h5>
                Visualize &amp; Analyze
              </h5>
              <p>
                Dynamically integrate, analyze and
                visualize GFBio datasets.
              </p>
              <a class="stretched-link" href="https://vat.gfbio.org/" target="_blank"
                 rel="noopener noreferrer"></a>
            </div>
          </div>
        </div>
        

        <div class="container-fluid bottom-row">
          <div class="container">
            <div class="row pb-1 pt-1">
    
              <div class="col-8 d-flex align-items-center">
                <ul class="list-group list-group-horizontal align-middle">
                  <li class="list-group-item">
                    <a href="https://www.gfbio.org/terms-of-use">Terms of use</a>
                  </li>
                  <li class="list-group-item">
                    <a href="https://www.gfbio.org/legal-notice">Legal Notice</a>
                  </li>
                  <li class="list-group-item">
                    <a href="https://www.gfbio.org/privacy-policy">Privacy Policy</a>
                  </li>
                </ul>
              </div>
    
              <div class="col-4">
                <ul class="list-group list-group-horizontal float-end">
                  <li class="list-group-item">
                    <a href="mailto:helpdesk@gfbio.org">
                      <i class="fas fa-envelope"></i>
                    </a>
                  </li>
                  <li class="list-group-item">
                    <a
                      href="https://twitter.com/intent/follow?original_referer=http%3A%2F%2Fwww.gfbio.org%2F&ref_src=twsrc%5Etfw&region=follow_link&screen_name=GFBio_Project&tw_p=followbutton">
                      <i class="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li class="list-group-item">
                    <a href="https://github.com/gfbio">
                      <i class="fab fa-github"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>    
      </footer>
    )
}
