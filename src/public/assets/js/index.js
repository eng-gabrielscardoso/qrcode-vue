new Vue({
    el: '#app',
    template: `
        <div class="container mt-3">
            <h1 class="title">{{title}}</h1>
            <form>
                <div class="form-group">
                    <label for="target">Informe o texto ou URL:</label>
                    <input class="form-control" type="text" name="target" id="target" v-model="target">
                </div>
            </form>
            <div class="qrcode m-3 " v-if="target">
                <img :src="generateQRCode" :alt="target" :title="target">
            </div>
        </div>
    `,
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