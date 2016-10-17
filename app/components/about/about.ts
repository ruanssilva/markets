import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Component } from '@angular/core';

@NgModule({
    imports: [BrowserModule],
    declarations: [AboutComponent],
    bootstrap: [AboutComponent]
})

@Component({
    templateUrl: './app/components/about/about.html'
})

export class AboutComponent {
    public Teste: string = "Opa!!";

    public Array : any[];


    Alert(): void {
        this.Array = [1,2,3,4,5,6];
    }
}
