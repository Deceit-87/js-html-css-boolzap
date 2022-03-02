
const app = new Vue({
 el: '#app',
 data: {
    search: '',
    currentIndex : -1,
    newMessage: '',
    

    contatti: [
        
            {
                name: 'Michele',
                avatar: 'https://picsum.photos/id/1/200/300',
                visible: true,
                messages: [
                {
                date: '10/01/2020 15:30:55',
                text: 'Hai portato a spasso il cane?',
                status: 'received'
                },
                {
                date: '10/01/2020 15:50:00',
                text: 'Ricordati di dargli da mangiare',
                status: 'sent'
                },
                {
                date: '10/01/2020 16:15:22',
                text: 'Tutto fatto!',
                status: 'received'
                }
            ]},
            {
                name: 'Mario',
                avatar: 'https://picsum.photos/id/2/200/300',
                visible: true,
                messages: [
                {
                date: '10/01/2020 15:30:55',
                text: 'Serio?',
                status: 'sent'
                },
                {
                date: '10/01/2020 15:50:00',
                text: 'staremo a vedere',
                status: 'sent'
                },
                {
                date: '10/01/2020 16:15:22',
                text: 'perfetto!',
                status: 'received'
                }]
            },
            {
              name: 'Fabio',
              avatar: 'https://picsum.photos/id/3/200/300',
              visible: true,
              messages: [
              {
              date: '20/03/2020 16:30:00',
              text: 'Ciao come stai?',
              status: 'sent'
              },
              {
              date: '20/03/2020 16:30:55',
              text: 'Bene grazie! Stasera ci vediamo?',
              status: 'received'
              },
              {
              date: '20/03/2020 16:35:00',
              text: 'Mi piacerebbe ma devo andare a fare la spesa.',
              status: 'sent'
              }
              ],
              },
              {
              name: 'Samuele',
              avatar: 'https://picsum.photos/id/4/200/300',
              visible: true,
              messages: [
              {
              date: '28/03/2020 10:10:40',
              text: 'La Marianna va in campagna',
              status: 'received'
              },
              {
              date: '28/03/2020 10:20:10',
              text: 'Sicuro di non aver sbagliato chat?',
              status: 'sent'
              },
              {
              date: '28/03/2020 16:15:22',
              text: 'Ah scusa!',
              status: 'received'
              }
              ],
              },
              {
              name: 'Luisa',
              avatar: 'https://picsum.photos/id/5/200/300',
              visible: true,
              messages: [
              {
              date: '10/01/2020 15:30:55',
              text: 'Lo sai che ha aperto una nuova pizzeria?',
              status: 'sent'
              },
              {
              date: '10/01/2020 15:50:00',
              text: 'Si, ma preferirei andare al cinema',
              status: 'received'
              }
              ],
              },
                {
                    name: 'Ale',
                    avatar: 'https://picsum.photos/id/6/200/300',
                    visible: true,
                    messages: [
                    {
                    date: '10/01/2020 15:30:55',
                    text: 'Ci sei stasera?',
                    status: 'sent'
                    },
                    {
                    date: '10/01/2020 15:50:00',
                    text: 'Ricordati!',
                    status: 'sent'
                    },
                    {
                    date: '10/01/2020 16:15:22',
                    text: 'si si tutto confermato, alle 20',
                    status: 'received'
                    }
            ]}
   
   
   
            ],
          
                

       },

methods:{
        // lastMessages:function (i) {
        //   const i = this.contatti[this.currentIndex].messages.length -1
        //   return this.contatti[this.currentIndex].messages[i].text
          
        // },
        clickSelected: function(index){

            this.currentIndex = index
        },
        sendMessage: function(currentIndex){
            const index = this.currentIndex
            const d = new Date()
            if(this.newMessage !== ''){
              const item = {
                date: `${d.getDate()}/${d.getMonth()+1}/${d.getFullYear()}/${d.getHours()}/${d.getMinutes()}/${d.getSeconds()}`,
                text: this.newMessage,
                status: 'sent',
              };
              this.contatti[index].messages.push(item);
              this.newMessage = '';
              setTimeout( () =>{
                this.reply(index)
              },3000);
            }
      
          },
          reply:function(index){
            const d = new Date()
            const item = {
              date: `${d.getDate()}/${d.getMonth()+1}/${d.getFullYear()}/${d.getHours()}/${d.getMinutes()}/${d.getSeconds()}`,
              text: 'ok',
              status: 'received',
            };

              this.contatti[index].messages.push(item);
          },
          findChat: function(){
            for (i = 0; i < this.contatti.length; i++){
              
              if (this.contatti[i].name.toLowerCase().includes(this.search.toLowerCase())){
                this.contatti[i].visible = true
                console.log( this.contatti[i].visible)
              } else {
                this.contatti[i].visible = false
                console.log( this.contatti[i].visible , this.contatti[i])
              }
            }
          },

     

            

        



}

})
                   
    



