
const app = new Vue({
 el: '#app',
 data: {
    currentIndex : -1,
    

    contatti: [
        
            {
                name: 'Michele',
                avatar: 'https://picsum.photos/id/1/200/300',
                visible: true,
                messages: [
                {
                date: '10/01/2020 15:30:55',
                text: 'Hai portato a spasso il cane?',
                status: 'sent'
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
                    name: 'Ale',
                    avatar: 'https://picsum.photos/id/3/200/300',
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
        clickSelected: function(index){

            this.currentIndex = index
            console.log(index)
        },


        



}

})
                   
    





