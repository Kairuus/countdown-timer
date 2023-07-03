import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'countdown-timer';

  infoHidden = true
  eventRequiredWarning = true
  invalidDateWarning = true
  showInfo(eventName: string, eventDate: string){

    let countdown = (<HTMLElement>document.querySelector('.countdown'))

    let countdownDate: Date;
    let countdownTimer: any;
    let countdownValue: string;

    countdownDate = new Date(eventDate);

    countdownTimer = setInterval(() => {
      const now = new Date().getTime();

      const distance = countdownDate.getTime() - now;


      if (distance < 0) {
        clearInterval(countdownTimer);
        if(countdown !== null)
        countdown.style.fontSize = '100px'
        countdown.textContent = `${eventName} time`;
        this.infoHidden = true
      } else {
        const months = this.padNumber(Math.floor(distance / (1000 * 60 * 60 * 24 * 30)));
        const days = this.padNumber(Math.floor((distance % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24)));
        const hours = this.padNumber(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        const minutes = this.padNumber(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
        const seconds = this.padNumber(Math.floor((distance % (1000 * 60)) / 1000));

        countdownValue = `${months} : ${days} : ${hours} : ${minutes} : ${seconds}`;
        if(countdown !== null)
        countdown.textContent = countdownValue
        this.infoHidden = false
      }
    }, 1000);

  }

  padNumber(number: number): string{
    return number.toString().padStart(2, '0')
  }

  nameValidation(eventName : string){
    let name = (<HTMLElement>document.querySelector('.event-input'))


    if(eventName === ''){
      this.eventRequiredWarning = false
      name.style.borderColor = 'red'
    }else{
      this.eventRequiredWarning = true
      name.style.borderColor = 'black'
    }
  }

  dateValidation(eventDate: string){
    let dateElement = (<HTMLElement>document.querySelector('.date-input'))


    const now = new Date().getTime();
    let date = new Date(eventDate);
    if(date.getTime() < now){
      this.invalidDateWarning = false
      dateElement.style.borderColor = 'red'
    }else{
      this.invalidDateWarning = true
      dateElement.style.borderColor = 'black'
    }
  }
}
