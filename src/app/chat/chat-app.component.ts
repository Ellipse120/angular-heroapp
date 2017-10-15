import { Component } from '@angular/core';
import { UserService } from './services/userService';

@Component({
  selector: 'chat-app',
  template: `
    <div class="chat">
      <div class="chat-nav">
        <chat-nav></chat-nav>
      </div>
      <div class="chat-threads">
        <chat-threads></chat-threads>
      </div>
      <div class="chat-window">
        <chat-window></chat-window>
      </div>
    </div>
  `,
  styles: [`
    .chat {
      height: 80vh;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: space-around;
    }

    .chat-nav {
      height: 20%;
      width: 100%;
      align-self: center;
      background-color: chartreuse;
    }

    .chat-threads {
      height: 50%;
      width: 100%;
      align-self: center;
      background-color: #039be5;
    }

    .chat-window {
      height: 30%;
      width: 100%;
      align-self: center;
      background-color: coral;
    }
  `]
})
export class ChatAppComponent {

  constructor() {
  }
}
