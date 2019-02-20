## DESCRIPTION
Angular 6+ **Flash Card**. You can show a card with image and content, when click on the card it will rotate and show another card with diffrent content.

## INSTALLATION

```sh
npm install jp-ng-flash-cards
```

## How to use angular flash card in your angular app


## Sample Code for Angular Flash cards

### app.module.ts - Import the JpNgFlashCardsModule in your module  

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {JpNgFlashCardsModule} from 'jp-ng-flash-cards'; // import jp-ng-flash-cards


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

```


### app.component.ts - Import the JpNgFlashCardsModule in your component

```typescript
import { Component } from '@angular/core';
import {JpNgFlashCardsModule} from 'jp-ng-flash-cards'; // import it to your component

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 public flashcardData: any;

  constructor() { // initiate it in your component constructor
    this.flashcardData = [
    {      
      front: { image:'https://raw.githubusercontent.com/dart-lang/logos/master/logos_and_wordmarks/angulardart-logo.png', title: 'Namaste', subtitle: 'Vanakam' },
      back: {
        title: 'meaning',
        subtitle: 'Hello, Greetings, I bless the divine in you',
        content: 'It is used to greet people every time they meet. It is usually initiated by the juniors'
      }
    },
    {
      front: {image: 'https://picsum.photos/200/300?image=0',
        title: '(Tapailai) Kasto chha?',
        subtitle: 'Eppadi Irukirergal ?'
      },
      back: {
        title: 'meaning',
        subtitle: 'How are you?',
        content: 'It is used to ask people how they are doing or feeling.'
      }
    }
    ]   
  }
}

```

### app.component.html - Include the  JpNgFlashCard library in your html component

```HTML
<lib-jp-ng-flash-cards [flashCards]="flashcardData"></lib-jp-ng-flash-cards>

```
In the above example, I have used two cards for flash card. You can use multiple flash cards. Front side contain image, title, subtitle. Back side of the flash card contains title, subtitle, content.

You have to use the library in your html component and feed the [flashcard] value in array of objects  format to load the flash card. You an feed single card or multiple card in array

## VERSION

0.0.1 - Angular 6 Flash cards