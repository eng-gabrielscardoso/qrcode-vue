new Vue({
    el: '#app',
    data: function() {
        return {
            title: 'Gerador de QRCode',
            target: 'https://github.com/eng-gabrielscardoso/',
            qrious: new QRious({size: 300})
        };
    },
    computed: {
        generateQRCode() {
            this.qrious.value = this.target;
            return this.qrious.toDataURL();
        }
    }
})