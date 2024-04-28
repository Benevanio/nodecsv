let pdf = require("html-pdf")
class PDFWireter {
    static WritePDF(fileName, html) {
        pdf.create(html, {}).toFile(fileName, (err) => {
            try {
                console.log("PDF criado com sucesso!");
            } catch (err) {
                console.log(err);
            }
        })
    }
}

module.exports = PDFWireter;