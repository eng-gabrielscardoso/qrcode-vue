new Vue({
    el: '#app',
    template: `
        <div id="app" :class="background">
            <div class="container">
                <div class="title pb-2">
                    <h1 :class="color">{{title}}</h1>
                </div>
                    <div class="form-group">
                        <label for="target" :class="color">Informe o texto ou URL:</label>
                        <input class="form-control text-dark bg-light" type="text" name="target" id="target" v-model="target">
                    </div>
                </form>
                <div class="qrcode pt-4" v-if="target">
                    <img :src="generateQRCode" :alt="target" :title="target">
                    <button type="button" :class="btnColor" @click="downloadQRCode">Baixar imagem</button>
                </div>
            </div> 
            <button type="button" :class="btnBorder + ' ' + btnColor" id="btnDarkMode" @click="darkMode"><i :class="btnIcon" aria-hidden="true"></i></button>
        </div>
    `,
    data: function() {
        return {
            title: 'Gerador de QRCode',
            target: 'https://github.com/eng-gabrielscardoso/',
            qrious: new QRious({size: 300}),
            color: 'text-dark',
            background: 'bg-light',
            btnBorder: 'border border-dark',
            btnColor: 'btn btn-outline-dark',
            btnIcon: 'fa fa-sun-o'
        };
    },
    computed: {
        generateQRCode() {
            this.qrious.value = this.target;
            return this.qrious.toDataURL();
        }
    },
    methods: {
        darkMode() {
            this.color == 'text-dark' ? this.color = 'text-light' : this.color = 'text-dark';
            this.background == 'bg-light' ? this.background = 'bg-dark' : this.background = 'bg-light';
            this.btnBorder == 'border border-dark' ? this.btnBorder = 'border border-light' : this.btnBorder = 'border border-dark';
            this.btnColor == 'btn btn-outline-dark' ? this.btnColor = 'btn btn-outline-light' : this.btnColor = 'btn btn-outline-dark';
            this.btnIcon == 'fa fa-sun-o' ? this.btnIcon = 'fa fa-moon-o' : this.btnIcon = 'fa fa-sun-o';
        },
        downloadQRCode(){
            console.log(this.qrious.toDataURL());
        }
    }
})