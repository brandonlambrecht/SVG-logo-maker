class SVG {
    constructor(text, color, shape) {
        this.text = text
        this.color = color
        this.shape = shape

    }
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        ${this.shape.render()}
       
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.color}">${this.text}</text>
        
      </svg>`
    }
}


module.exports = SVG;
