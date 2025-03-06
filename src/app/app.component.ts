import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'invitation';


    open() {
      const element = document.getElementById('envelope');
      
      if (element) {
        element.classList.add('open');
        element.classList.remove('close');
      }

      if(element){
        setTimeout(() => {
          element.classList.add('my-class');
        }, 2000); 

      }
      const cover = document.getElementById('cover');
      const envlopeWrapper = document.getElementById('envlope-wrapper');

      if(envlopeWrapper) {
        setTimeout(() => {
          envlopeWrapper.classList.add('hide');
        }, 3000); // Delay of 2 seconds

        setTimeout(() => {
          envlopeWrapper.classList.add('hide2');
        }, 3500); // Delay of 2 seconds
    }

      if(cover) {
        setTimeout(() => {
          cover.classList.add('show');

        }, 3500); // Delay of 2 seconds
     }
    }

    close() {
      const element = document.getElementById('envelope');
      if (element) {
        element.classList.add('close');
        element.classList.remove('open');

      }
    }


    playSound() {
      let audio = new Audio();
      audio.src = '../assets/turn.mp3'; // Path to your sound file
      audio.load();
      audio.play();
    }
}
