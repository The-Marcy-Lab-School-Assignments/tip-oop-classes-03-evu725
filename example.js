class Phone {
    constructor(name, model, color, software) {
        this.name = name;
        this.model = model;
        this.color = color;
        this.software = software;
    }

    update() {
        return `Your ${this.name} ${model} has been updated to ${this.software}`;
    }

    virutalAssistant() {
        return `Hi,`;
    }

}

class Apple extends Phone {
    constructor(name, model, color, software) {
        super(name, model, color, software);
    }

    virutalAssistant() {
        super.virutalAssistant() + `Siri`;
    }
}

class Samsung {
    constructor(name, model, color) {
        super(name, model, color)
    }

    virutalAssistant() {
        super.virutalAssistant() + 'Bixby';
    }
}