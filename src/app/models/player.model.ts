import { APP } from './../config/app.config';

export class Player {
    name: string;
    avatar: string;
    status: string;
    stack: number;
    isPlayingHand: boolean;

    constructor(name: string, avatar: string, status: string, stack: number, isPlayingHand: boolean) {
        this.name = name;
        this.avatar = avatar;
        this.status = status;
        this.stack = stack;
        this.isPlayingHand = isPlayingHand;
    }

    get imagePath(): string {
        return APP.avatarsPath + this.avatar + APP.avatarsFormat;
    }

    isReady(): boolean {
        return this.status === 'READY';
    }

    getStack(): string {
        return APP.moneyPrefix + this.stack;
    }
}