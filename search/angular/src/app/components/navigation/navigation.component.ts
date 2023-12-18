import { Component, OnInit } from "@angular/core";
import "reflect-metadata";
import { KeycloakService } from "keycloak-angular";
import { KeycloakProfile } from "keycloak-js";

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.css"],
})
export class NavigationComponent {
  navCollapsed = true;
  logoUrl = "/assets/img/gfbio_logo_small.svg";
  public isLoggedIn = false;
  public userProfile: KeycloakProfile | null = null;

  user = "";

  indexes = [
    {
      key: "gfbio",
      link: "/",
    },
    /*, {
                    key: 'biodiv',
                    link: '/bio-div'
                }*/
  ];

  toggleNav() {
    this.navCollapsed = !this.navCollapsed;
  }

  constructor(private keycloakService: KeycloakService) {}

  private initializeUserOptions(): void {
    try {
      this.user = this.keycloakService.getUsername();
      this.keycloakService.loadUserProfile().then((profile) => {
        console.log(profile.username);
        console.log(profile["attributes"]); //gives you array of all attributes of user, extract what you need
      });
    } catch {
      this.user = null;
    }
  }

  public async ngOnInit() {
    this.initializeUserOptions();

    if (await this.keycloakService.isLoggedIn()) {
      this.userProfile = await this.keycloakService.loadUserProfile();
    }

    // this.isLoggedIn = await this.keycloakService.isLoggedIn();

    // if (this.isLoggedIn) {
    //     this.userProfile = await this.keycloakService.loadUserProfile();
    //     console.log(this.userProfile);
    // }
  }

  public login() {
    this.keycloakService.login();
  }

  public logout() {
    this.keycloakService.logout();
  }
}
