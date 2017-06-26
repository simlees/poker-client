import { ChatMessage } from './../models/chat-message.model';

export enum MessageType {
    CHAT, MISC
}

export class BaseMessage {
    messageType: MessageType;
    chatMessage: ChatMessage;
}