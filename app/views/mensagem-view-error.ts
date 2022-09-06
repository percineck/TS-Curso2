import { View } from "./view.js"

export class MensagemViewAlert extends View<string>{

    protected template(model: string): string {
        return `
            <p class="alert alert-danger">${model}</p>
        `
    }
}