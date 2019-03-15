<template>
   <v-app>
      <section 
        >
         <v-carousel 
         hide-delimiters
         height="auto"
         interval="10000"
         hide-controls
         class="jieCaro"
         >
         <v-carousel-item
            touchless
            class="netsvg"
         >
         <v-card 
            height="100%"
            style=" background: linear-gradient(90deg, rgba(255, 255, 255, 0), rgba(0, 9, 14, 0)) 50% center !important"
            >
            <v-container >
               <v-layout row wrap align-center fill-height>
                  <v-flex xs12 md6 class="my-5">
                     <h1  style="line-height:1.4 !important" class="font-weight-black white--text mb-4 display-2 ">  Managed Your Cloud Ckcm Account Platform</h1>
                     <v-divider></v-divider>
                     <div style="line-height:2 !important;font-size:17px;" class="my-3 font-weight-thin">A platform that facilitates choice, simplicity and performance. All this is backed by caring expert support so that you stay focused on what you do best, win as an individual and succeed as a ckcmian. Be one of us, enroll now and get free account.</div>
                     <v-btn to="/enrollment" style="border-radius:5px !important;letter-spacing:1px !important" large class="body-1 text-none font-weight-bold mt-3  deep-orange " depressed>Get enrolled now </v-btn>
                  </v-flex>
               </v-layout>

            </v-container>

            <v-container grid-list-xs>
               <v-layout justify-center align-center style="margin-top:-50px">
                  <span style="font-size:14px" class="teal--text text--darken-2">Stay informed about updates to the Ckcmnetwork developer platform Learn more </span>
               </v-layout>
               <v-layout justify-center class="mb-5" >
                  <v-avatar v-scroll-to="'#infoDeveloper'" style="cursor:pointer" tile size="40">
                     <img class="arrowDownjie" src="https://img.icons8.com/material-rounded/50/009688/expand-arrow.png">
                  </v-avatar>
               </v-layout>
            </v-container>
           
         </v-card>
         
         </v-carousel-item>
       </v-carousel>
      </section>

      <section id="infoDeveloper">
         <v-container grid-list-xs>
            <v-layout row wrap>
               <v-flex md4>
                  <v-card class="bgsvg1" style="padding:62px !important" flat width="100%">
                     <div class="grey--text subheading"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. At nemo doloremque, consequatur illum voluptas asperiores beatae, numquam iste error quas officiis totam suscipit rerum dolorum omnis dolores corporis ab rem? </div>
                  </v-card>
               </v-flex>  

               <v-flex md4>
                  <v-card class="bgsvg2" style="padding:62px !important" flat width="100%">
                     <div class="grey--text subheading"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. At nemo doloremque, consequatur illum voluptas asperiores beatae, numquam iste error quas officiis totam suscipit rerum dolorum omnis dolores corporis ab rem? </div>
                  </v-card>
               </v-flex>  

               <v-flex md4>
                  <v-card class="bgsvg3" style="padding:62px !important" flat width="100%">
                     <div class="grey--text subheading"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. At nemo doloremque, consequatur illum voluptas asperiores beatae, numquam iste error quas officiis totam suscipit rerum dolorum omnis dolores corporis ab rem? </div>
                  </v-card>
               </v-flex>               
            </v-layout>

            <v-layout class="mt-5" column wrap align-center justify-center>
               <div class="grey--text subheading">*Nope, no gotcha here. </div>
               <div class="grey--text subheading">It just takes a few clicks. </div>
               <v-btn @click="dialog = true"  style="border-radius:5px !important;letter-spacing:1px !important" large class="body-1 text-none font-weight-bold mt-3 white--text teal lighten-2">Apply now</v-btn>
            </v-layout>

            <v-layout class="mt-5" column wrap align-center justify-center>
               <h2 class=" grey--text text-xs-center text--darken-3 display-2"> Go beyond modern </h2>

               <v-flex xs12 class="mt-2">
                  <v-card flat>
                     <v-container  grid-list-xs >
                        <v-layout row wrap justify-center align-center="">
                           <v-flex md4 sm12   class=" my-4">
                              <v-layout column  fill-height >
                                 <img src="/imgs/ckcm/svg1.svg" height="200" alt="">
                              </v-layout>
                           </v-flex>
                           
                           <v-flex md5 sm12 class="  my-4">
                              <v-layout column justify- fill-height >
                                 <div style="line-height:1.5 !important" class="title font-weight-bold">Nail the fundamentals with rock-solid deployment</div>
                                 <div style="font-size:17px;line-height:1.5 !important" class="mt-3 font-weight-thin grey--text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam necessitatibus sequi tenetur?</div>
                              </v-layout>
                           </v-flex>


                           <v-flex offset-md2=""  md4 sm12 class="my-4">
                              <v-layout column justify-center fill-height >
                                 <div style="line-height:1.5 !important" class="title font-weight-bold">Add dynamic functionality with built‑in applications</div>
                                 <div style="font-size:17px;line-height:1.5 !important" class="mt-3 font-weight-thin grey--text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis dolorum inventore explicabo aliquam sit, dignissimos praesentium.</div>
                              </v-layout>
                           </v-flex>
                           <v-flex md5 sm12  class=" my-4">
                              <v-layout column  fill-height >
                                 <img src="/imgs/ckcm/svg2.svg" height="200" alt="">
                              </v-layout>
                           </v-flex>
                           

                           <v-flex md4 sm12  class=" my-4">
                              <v-layout column  fill-height >
                                 <img src="/imgs/ckcm/svg3.svg" height="200" alt="">
                              </v-layout>
                           </v-flex>
                           <v-flex md5 sm12 class="my-4">
                              <v-layout column justify-center fill-height >
                                 <div style="line-height:1.5 !important" class="title font-weight-bold">Customize your projects with your own build tools or microservices</div>
                                 <div style="font-size:17px;line-height:1.5 !important" class="mt-3 font-weight-thin grey--text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, laboriosam!</div>
                              </v-layout>
                           </v-flex>
                        </v-layout>
                        
                     </v-container>
                  </v-card>
               </v-flex>
            </v-layout>

         </v-container>
      </section>

      <section class="gradient py-5" style="position:relative" >
         <v-container  class="dontstop mt-4" fluid grid-list-lg>
         <h3 class="font-weight-bold display-1 text-xs-center white--text"> There’s a better way to handle your subjects </h3>
         <v-layout row wrap class="mt-5">
              <v-flex md4 sm12  class="pa-5 my-4">
                  <v-layout column  >
                     <img class="txt-xs-center mb-5" src="/imgs/ckcm/2ndsvg1.svg" height="200" alt="">

                     <div style="line-height:1.5 !important" class="title font-weight-bold white--text">A single, simplified workflow</div>
                     <div style="font-size:16px;line-height:1.5 !important" class="mt-3 grey--text text--lighten-2"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur quae, pariatur accusantium facere fuga sunt labore possimus dolore rerum, repellendus ipsum voluptatem illum optio et odio at. Beatae, dolorem ea.</div>
                  </v-layout>
               </v-flex>

               <v-flex md4 sm12  class="pa-5 my-4">
                  <v-layout column   >
                     <img class="txt-xs-center mb-5" src="/imgs/ckcm/2ndsvg2.svg" height="200" alt="">

                     <div style="line-height:1.5 !important" class="title font-weight-bold white--text">Performance from the ground up</div>
                     <div style="font-size:16px;line-height:1.5 !important" class="mt-3 grey--text text--lighten-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio sapiente architecto sit voluptas eum officia unde veniam minima. Doloremque ullam sint a!</div>
                  </v-layout>
               </v-flex>

               <v-flex md4 sm12  class="pa-5 my-4">
                  <v-layout column >
                     <img class="txt-xs-center mb-5" src="/imgs/ckcm/2ndsvg3.svg" height="200" alt="">

                     <div style="line-height:1.5 !important" class="title font-weight-bold white--text">Don’t stop at static</div>
                     <div style="font-size:16px;line-height:1.5 !important" class="mt-3 grey--text text--lighten-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam maxime et a, optio facere laboriosam explicabo! Exercitationem sit quam animi.</div>
                  </v-layout>
               </v-flex>

         </v-layout>

         <v-layout class=" pb-5" column wrap align-center justify-center>
            <v-btn @click="dialog = true"  style="border-radius:5px !important;letter-spacing:1px !important" large class="body-1 text-none font-weight-bold mt-3 white--text teal lighten-2">Get started now</v-btn>
         </v-layout>

         </v-container>
      </section>

      
      <section>
         <div class="wave" aria-hidden="true">
            <!-- <svg viewBox="0 0 1440 120"><use xlink:href="#wave"></use></svg> -->
            <svg viewBox="0 0 1440 120" id="wave" width="100%" height="100%">
               <path fill="#f4f7f8" d="M1440,21.2101911 L1440,120 L0,120 L0,21.2101911 C120,35.0700637 240,42 360,42 C480,42 600,35.0700637 720,21.2101911 C808.32779,12.416393 874.573633,6.87702029 918.737528,4.59207306 C972.491685,1.8109458 1026.24584,0.420382166 1080,0.420382166 C1200,0.420382166 1320,7.35031847 1440,21.2101911 Z"></path>
            </svg>
         </div>
      </section>
   </v-app>
</template>

<script>
export default {

}
</script>

<style>

</style>
