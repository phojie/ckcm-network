<template>
<v-card  id="scroll-target" app height="100%" width="100%" style="position:absolute; bottom:0" flat class="newsfeedScroll transparent scrollbar-primary "> 
      <v-layout v-scroll:#scroll-target="onScroll" class="mt-1 mx-1 justify-center">
         <v-flex class=" xs12 sm12 md8 lg8  mr-2 mt-1">
            <v-card flat  class="" >
               <!-- jieSvgBg1 -->
               <!-- style="border:1px #E0E0E0 solid;border-radius:2px"   -->
               <v-layout wrap color="white" :class="whatisClass" class="py-2 px-2" >
                  <v-flex xs12 style="margin-top:-10px" >
                     <v-layout row wrap>
                        <v-btn
                           @click="newPostBtn"
                           round
                           color="transparent light-blue--text text--darken-1"
                           depressed
                           small
                           class="caption font-weigth-bold  textDefault"
                        >
                           <v-avatar tile size="20">  
                              <img src="https://png.icons8.com/ios/50/039BE5/create-new.png">
                           </v-avatar>
                           New Post
                        </v-btn>
                        <v-btn
                           round
                           color="transparent light-green--text text--darken-1"
                           depressed
                           small
                           class="caption font-weigth-bold  textDefault"
                        >
                           <v-avatar tile size="20">  
                              <img src="https://png.icons8.com/ios/50/7CB342/poll-topic.png">
                           </v-avatar>
                           Add Poll
                        </v-btn>
                        <div style="position:relative:overflow:hidden;display:inline-block">
                           <v-btn  round color="transparent brown--text text--darken-1" depressed small class="caption font-weigth-bold  textDefault">
                              <v-avatar tile size="18">  
                                 <img src="https://png.icons8.com/ios/50/6D4C41/image.png">
                              </v-avatar>
                              Photo/Album
                           </v-btn>
                           <!-- style="font-size:100px !important;positon:absolute !important;left;top:0;opacity:0;"  -->
                           <input style="display:none" ref="newsFile" @input="addFile" accept="image/*" type="file" multiple>
                        </div>
                        <v-btn
                           round
                           color="transparent indigo--text text--darken-1"
                           depressed
                           small
                           class="caption font-weigth-bold  textDefault"
                        >
                           <v-avatar tile size="18">  
                              <img src="https://png.icons8.com/ios/50/3949AB/about.png">
                           </v-avatar>
                           Make Announcement
                        </v-btn>
                        
                       
                        <!-- <v-btn
                           icon
                           color="grey lighten-3"
                           round
                           depressed
                           small
                           style="font-size:12px" class="font-weigth-bold textfm1 textDefault"
                        >
                           <v-icon dark  color="grey darken-4" style="font-size:17px">mdi-dots-horizontal</v-icon>
                        </v-btn> -->
                     </v-layout>
                  </v-flex>
                  <div  style="width:39px !important" class=" mt-3">
                     <v-btn @click="profileMenu" color="" icon style="height:34px !important; width:34px !important;margin-top:-5px" class=" jieleftNav"  flat>
                        <v-badge color="white"  overlap class="jieBadgeNews">
                           <!-- <span  slot="badge" class="" style="font-size:16px; border-radius: 50%; border: 4.5px solid #7CB342 ;"></span> -->
                           <v-avatar class="mr-2 " color="grey lighten-3" size="32">
                              <img :src="`${userData.photoUrl}?height=10000`" alt="">
                           </v-avatar>
                        </v-badge>
                     </v-btn> 
                  </div>
                  <v-flex style="margin-top:-3px" :class="whatisFlex">
                     <!-- jiew -->
                     <!-- @blur="whatisFunctionMethodFalse" -->
                     <v-textarea 
                        background-color="transparent"
                        hide-details v-model="postedData.message" color="blue"
                        class="whatIs  subheading" row-height="10"
                        ref="newP"
                        append-icon="mdi-image-outline"
                        @click:append="photoBtn"
                        style="" placeholder="What is your main focus for today?"
                        @focus="whatisFunctionMethod"  flat solo
                        auto-grow
                     ></v-textarea>
                    
                  </v-flex>
                  <v-flex v-if="!whatisFunction" class="ml-2" style="margin-top:-10px">
                     <span style="font-size:28px" class="textfm2">{{timeDisplay}}</span>
                     <br>
                     <span class="textfm2 black--text" style="font-size:15px"> {{greet}}</span>
                  </v-flex>
                  <v-flex v-if="newsImgsUrl.length > 1 && newsImgsUrl.length < 4 " class="" xs12>
                     <v-card depressed flat class="ml-5 mx-2 ">
                        <span v-for="(thisUrl, index) in newsImgsUrl" :key="index" class="mr-1" >
                           <img
                              style="width:35%;border-radius:5px !important;border:1px solid #E0E0E0"  
                              :src="thisUrl.imgUrl"
                           >
                        </span>
                     <v-progress-linear v-if="imgsPercentage != 100" color="blue" height="3" :value="imgsPercentage"></v-progress-linear>
                     </v-card>
                  </v-flex>
                  <v-flex  v-else-if="newsImgsUrl.length == 1" class="" xs12>
                     <v-card depressed flat class="ml-5 mx-2 ">
                        <span style="min-width:100% !important" v-for="(thisUrl, index) in newsImgsUrl" :key="index" class="mr-1" >
                           <!-- <v-progress-linear></v-progress-linear> -->
                           <img
                              style="width:100%;border-radius:5px !important;border:1px solid #E0E0E0"  
                              :src="thisUrl.imgUrl"
                           >
                        </span>
                     <v-progress-linear color="blue" height="3" v-if="imgsPercentage != 100" :value="imgsPercentage"></v-progress-linear>
                     </v-card>
                  </v-flex>
                  <!-- <h3>{{}}</h3> -->
                  <!-- <v-flex xs9 class="mb-1" >
                     <v-layout>
                        <v-btn
                           color="grey lighten-3"
                           round
                           depressed
                           small
                           style="font-size:12px" class="font-weigth-bold textfm1 textDefault"
                        >
                           <v-icon dark class="mr-1" color="blue" style="font-size:15px">mdi-pencil</v-icon>
                           Make Post
                        </v-btn>
                        <v-btn
                           color="grey lighten-3"
                           round
                           depressed
                           small
                           style="font-size:12px" class="font-weigth-bold textfm1 textDefault"
                        >
                           <v-icon dark class="mr-1" color="brown" style="font-size:15px">mdi-image-album</v-icon>
                           Photo/Album
                        </v-btn>
                        <v-btn
                           color="grey lighten-3"
                           round
                           depressed
                           small
                           style="font-size:12px" class="font-weigth-bold textfm1 textDefault"
                        >
                           <v-icon dark class="mr-1" color="green" style="font-size:15px">mdi-poll</v-icon>
                           Poll Voting
                        </v-btn>
                     </v-layout>

                  </v-flex> -->
                 
                  <v-flex xs12 class="mx-2" v-if="whatisFunction" >
                     <v-layout row wrap>
                        <v-spacer></v-spacer>
                        <emoji-picker @emoji="insert" :search="search">
                           <div slot="emoji-invoker" slot-scope="{ events }" v-on="events">
                              <v-tooltip content-class="jieToolHeart" color="grey darken-4"  top>
                                 <span style="margin:3px;font-size:11px" class="text-xs-center"> Insert Emoji </span>
                                 <v-layout justify-center>
                                 <div class="" style="
                                    position:absolute;
                                    margin-top:5px;
                                    margin-bottom:5px;
                                    width: 0;
                                    height: 0;
                                    border-left: 6px solid transparent;
                                    border-right: 6px solid transparent;
                                    border-top: 6px solid #212121;"
                                 ></div>
                                 </v-layout> 
                                 <v-btn  @click="events" slot="activator" style="margin-top:-2px;" large icon flat depressed color="blue" class="white--text font-weight-black caption textDefault"> 
                                    <v-avatar color="" tile size="20" >
                                       <img src="https://png.icons8.com/ios/50/2196F3/happy.png">
                                    </v-avatar>
                                 </v-btn>
                              </v-tooltip>
                           </div>
                           <div slot="emoji-picker" slot-scope="{ emojis, insert, display }">
                              <div>
                                    <div>
                                       <input type="text" v-model="searchEmoji">
                                    </div>
                                    <v-layout row wrap>
                                       <div v-for="(emojiGroup, category) in emojis" :key="category">
                                          <h5>{{ category }}</h5>
                                          <v-layout row wrap>
                                                   <span
                                                      v-for="(emoji, emojiName) in emojiGroup"
                                                      :key="emojiName"
                                                      @click="insert(emoji)"
                                                      :title="emojiName"
                                                   >{{ emoji }}</span>
                                          </v-layout>
                                       </div>
                                    </v-layout>
                              </div>
                           </div>
                        </emoji-picker>
                        <v-btn small   :disabled="postedDataNews"  depressed color="blue" @click="makePost(userData)" class="white--text font-weight-black caption textDefault"> Post </v-btn>
                     </v-layout>
                  </v-flex>
               </v-layout>
               <!-- <v-layout>
                  <v-flex  xs1 v-for="newsfeed in newsfeeds" :key="newsfeed.keyIndex" v-if="newsfeed.userId != userData['ckcm-network_token_id']"  class="pa-2">
                           <v-btn color="indigo" icon @click="test" class="">
                              <v-avatar class="" color="grey" size="34px">
                                 <img :src="newsfeed.photoUrl" alt="">
                              </v-avatar>
                           </v-btn>
                  </v-flex>
               </v-layout> -->
            </v-card>

           
               <v-card flat  v-for="newsfeed in newsfeeds " :key="newsfeed.keyIndex" class="mt-1" >
                  <!-- <v-progress-linear active height="2" style="margin:0px !important" color="grey lighten-2" :indeterminate="false"></v-progress-linear> -->
                  <v-layout wrap class="newscard pt-2" >
                     <v-flex xs12 class="mx-2">
                        <v-layout>
                        <v-btn @click="profileMenu" color="" icon style="height:34px !important; width:34px !important" class=" jieleftNav"  flat>
                           <v-badge color="white"  overlap class="jieBadgeNews">
                              <!-- <span  slot="badge" class="" style="font-size:16px; border-radius: 50%; border: 4.5px solid #7CB342 ;"></span> -->
                              <v-avatar class="mr-2 " color="grey lighten-3" size="38">
                                 <img :src="`${newsfeed.photoUrl}?height=10000`" :alt="404">
                              </v-avatar>
                           </v-badge>
                        </v-btn> 
                        <div class="mt-1">
                        <p class="mb-0">
                           <span @click="profileMenuFriend(newsfeed.displayName)" style="font-size:13px" class="aJie font-weight-bold ">{{newsfeed.displayName}} </span>
                           <span style="margin-left:-2px;" class="textlower caption grey--text text--darken-1"> @jie26 </span> 
                        </p>
                        <p style="margin-top:-5px;font-size:11px;" class="textfm2 grey--text">
                           <!-- {{newsfeed.timestamp | moment("dddd, MMMM Do YYYY: h:mm:a") }}| -->
                           <Timeago :auto-update="60" :datetime="newsfeed.timestamp" :since="timeAgoFormat"></Timeago>
                        </p>
                        </div>
                        <v-spacer></v-spacer>
                        <v-menu open-on-hover style="margin-top:-20px;" offset-y nudge-left="80"> 
                           <v-btn
                              slot="activator"
                              icon
                              outline
                              color="transparent"
                              round
                              small
                              style="font-size:12px" class="font-weigth-bold textfm1 textDefault"
                           >
                              <v-avatar size="13">
                                 <img src="https://png.icons8.com/ios/50/424242/expand-arrow-filled.png">
                              </v-avatar>
                           </v-btn>
                           <v-list>
                           <v-list-tile
                              v-for="(item, index) in items"
                              :key="index"
                              @click="test"
                           >
                              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                           </v-list-tile>
                           </v-list>
                        </v-menu>
                        
                        </v-layout>

                     </v-flex>

                     <v-flex  style="margin-top:-15px;" xs12  >
                        <v-layout class="wrap row ml-1">
                           <v-textarea
                              v-if="newsfeed.data.message.length <= 80 & newsfeed.data.image == ''" 
                              flat readonly background-color="transparent"
                              hide-details rows="1" solo auto-grow
                              class="newslineHeight "
                              style="word-wrap: break-word;font-size:25px !important;letter-spacing:1.34"
                              v-model="newsfeed.data.message"
                           ></v-textarea>
                           <v-textarea
                              v-else-if="newsfeed.data.message.length > 80 & newsfeed.data.image == ''" 
                              flat readonly background-color="transparent"
                              hide-details rows="1" solo auto-grow
                              v-model="newsfeed.data.message"
                              class=" "
                              style="word-wrap: break-word;letter-spacing:1.34"
                           ></v-textarea>
                           <v-textarea
                              v-else
                              flat readonly background-color="transparent"
                              hide-details rows="1" solo auto-grow
                              v-model="newsfeed.data.message"
                              class=" "
                              style="word-wrap: break-word;font-size:14px !important;letter-spacing:1.34"
                           ></v-textarea>
                        </v-layout>

                        <v-layout wrap row  v-if="newsfeed.data.image != null" class="">
                           <v-card depressed flat class="mx-3 ">
                              <span v-if="newsfeed.data.image.count == 1" > 
                                 <img
                                    style="margin-bottom:7px;margin-top:-3px;border-radius:5px !important;border:1px solid #E0E0E0"  
                                    width="100%"
                                    height="100%"
                                    :src="newsfeed.data.image[0].imgUrl"
                                 >
                              </span>
                              <span v-else-if="newsfeed.data.image.count > 1" v-for="(dataImage, index) in newsfeed.data.image" :key="index"> 
                                 <img
                                    style="margin-bottom:7px;margin-top:-3px;border-radius:5px !important;border:1px solid #E0E0E0"  
                                    width="50%"
                                    :src="dataImage.imgUrl"
                                 >
                              </span>

                                 <!-- aspect-ratio="2.75" -->
                           </v-card>
                        </v-layout>
                          
                        <!-- <v-divider class="grey lighten-3"> </v-divider> -->
                        <v-layout wrap row> 
                           <v-flex class="mx-2 text-xs-left" >
                                 <!-- WLA KO GA LIKE -->
                                 <v-btn @click="newsAtLike(newsfeed)" :disabled="disAbleReact" v-if="newsfeed.whoLikes[userData['ckcm-network_token_id']] == null " flat :ripple="false" icon large class="Heartbtn" >
                                    <v-tooltip content-class="jieToolHeart" color="grey darken-4"  top>
                                       <span style="margin:3px;font-size:11px" class="text-xs-center">Like </span>
                                       <v-layout justify-center>
                                       <div class="" style="
                                          position:absolute;
                                          margin-top:5px;
                                          margin-bottom:5px;
                                          width: 0;
                                          height: 0;
                                          border-left: 6px solid transparent;
                                          border-right: 6px solid transparent;
                                          border-top: 6px solid #212121;"
                                       ></div>
                                       </v-layout> 
                                       <div  v-if="AnimateHeart == newsfeed.keyIndex" slot="activator" class="heartnotFav">
                                          <div v-if="newsfeed.likes > 0" style="margin-top:20px;margin-left:40px;position:absolute;font-size:12px;font-weight:bold;line-height:1;">
                                             {{newsfeed.likes}}
                                          </div>
                                       </div>
                                       <div  slot="activator" class="heartLeft">
                                          <div v-if="newsfeed.likes > 0" style="margin-top:20px;margin-left:40px;position:absolute;font-size:12px;font-weight:bold;line-height:1;">
                                             {{newsfeed.likes}}
                                          </div>
                                       </div>
                                    </v-tooltip>
                                 </v-btn>
                                 <!-- GA LIKE KO -->
                                 <v-btn @click="newsAtUnlike(newsfeed)" :disabled="disAbleReact" v-else flat :ripple="false" icon large class="HeartbtnActive" >
                                    <v-tooltip  content-class="jieToolHeart" color="grey darken-4"  top>
                                       <span style="margin:3px;font-size:11px" > Unlike </span>
                                       <v-layout justify-center>
                                       <div class="" style="
                                          position:absolute;
                                          margin-top:5px;
                                          margin-bottom:5px;
                                          width: 0;
                                          height: 0;
                                          border-left: 6px solid transparent;
                                          border-right: 6px solid transparent;
                                          border-top: 6px solid #212121;"
                                       ></div>
                                       </v-layout> 
                                       <div  v-if="AnimateHeart == newsfeed.keyIndex" slot="activator" class=" heartFav ">
                                          <div style="margin-top:20px;margin-left:40px;position:absolute;font-size:12px;font-weight:bold;line-height:1;">
                                             {{newsfeed.likes}}
                                          </div>
                                       </div>
                                       <div v-else slot="activator" class="heartRight">
                                          <div style="margin-top:20px;margin-left:40px;position:absolute;font-size:12px;font-weight:bold;line-height:1;">
                                             {{newsfeed.likes}}
                                          </div>
                                       </div>
                                    </v-tooltip>
                                 </v-btn>

                                 <v-btn v-if="newsfeed.whoComments[userData['ckcm-network_token_id']] != null" flat icon large class="mx-4 commentbtnActive" :ripple="false"  color="transparent">
                                    <v-tooltip content-class="jieTool" color="grey darken-4"  top>
                                       <v-avatar  slot="activator" color="" tile size="20" class="mr-1">
                                          <v-icon style="font-size:18px">mdi-comment-multiple</v-icon>
                                       </v-avatar>
                                       <span style="margin:3px;font-size:12px" > Comment </span>
                                          <v-layout justify-center>
                                             <div class="" style="
                                                position:absolute;
                                                margin-top:5px;
                                                margin-bottom:5px;
                                                width: 0;
                                                height: 0;
                                                border-left: 6px solid transparent;
                                                border-right: 6px solid transparent;
                                                border-top: 6px solid #212121;"
                                             ></div>
                                          </v-layout> 
                                    </v-tooltip>
                                    <div style="margin-left:4px;margin-top:3px;font-size:12px;font-weight:bold;line-height:1;">
                                       <span v-if="newsfeed.comments != 0 ">{{newsfeed.comments}}</span>
                                    </div>
                                 </v-btn>

                                 <v-btn v-else flat icon large class="mx-4 commentbtn" :ripple="false"  color="transparent">
                                    <v-tooltip content-class="jieTool" color="grey darken-4"  top>
                                       <v-avatar  slot="activator" color="" tile size="20" class="mr-1">
                                          <v-icon style="font-size:18px">mdi-comment-multiple-outline</v-icon>
                                       </v-avatar>
                                       <span style="margin:3px;font-size:12px" > Comment </span>
                                          <v-layout justify-center>
                                             <div class="" style="
                                                position:absolute;
                                                margin-top:5px;
                                                margin-bottom:5px;
                                                width: 0;
                                                height: 0;
                                                border-left: 6px solid transparent;
                                                border-right: 6px solid transparent;
                                                border-top: 6px solid #212121;"
                                             ></div>
                                          </v-layout> 
                                    </v-tooltip>
                                    <div style="margin-left:4px;margin-top:3px;font-size:12px;font-weight:bold;line-height:1;">
                                       <span v-if="newsfeed.comments != 0 ">{{newsfeed.comments}}</span>
                                    </div>
                                 </v-btn>

                                 

                                 <v-btn style="margin-left:-2px" class="messagebtn" :ripple="false"  flat icon large color="transparent">
                                    <v-tooltip content-class="jieTool" color="grey darken-4"  top>
                                       <v-avatar  slot="activator" color="" tile size="17" class="mr-1">
                                          <img src="https://png.icons8.com/ios/50/546E7A/new-post.png">
                                          <!-- <img src="https://png.icons8.com/ios/50/546E7A/sent.png"> -->
                                          <!-- <v-icon style="font-size:20px">mdi-email-outline</v-icon> -->
                                       </v-avatar>
                                       <span style="margin:3px;font-size:11px" > Message </span>
                                       <v-layout justify-center>
                                          <div class="" style="
                                             position:absolute;
                                             margin-top:5px;
                                             margin-bottom:5px;
                                             width: 0;
                                             height: 0;
                                             border-left: 6px solid transparent;
                                             border-right: 6px solid transparent;
                                             border-top: 6px solid #212121;"
                                          ></div>
                                       </v-layout> 
                                    </v-tooltip>
                                 </v-btn>
                              
                              <!-- <v-btn flat icon color="grey">
                                 <v-icon>star</v-icon>
                              </v-btn> -->
                           </v-flex>
                        </v-layout>
                     </v-flex>
                     <v-layout row wrap class="pb-1 jieSvgBg1">
                        <v-flex class="mx-3" xs12 v-if="newsfeed.commented != null">
                           <v-divider class="grey lighten-3"></v-divider>
                        </v-flex>

                        <v-flex xs12 class="mx-2  ">
                           <v-flex xs12 v-for="commented in newsfeed.commentedLimit" :key="commented['.key']">
                              <v-layout v-if="commented.userId == userData['ckcm-network_token_id']">
                                 <div  class=" mt-3">
                                    <v-btn @click="profileMenu" color="" icon style="height:34px !important; width:34px !important;margin-top:-5px" class=" jieleftNav"  flat>
                                       <v-badge color="white"  overlap class="jieBadgeNews">
                                          <v-avatar class="mr-2 " color="grey lighten-3" size="32">
                                             <img :src="commented.photoUrl" alt="">
                                          </v-avatar>
                                       </v-badge>
                                    </v-btn> 
                                 </div>
                              
                                 <v-flex xs11  style="margin-top:12px;margin-left:-4px" >
                                    <p style="word-wrap:break-word !important;max-width:98%;bwidth: auto !important" class=" green lighten-5 jie3Commented">
                                       <router-link class="caption font-weight-bold blue--text text--darken-3 aJie" to="/profile/jiecel.marianne">{{commented.displayName}}</router-link>
                                       {{commented.data}}
                                    </p>
                                    <div class="caption ml-3" style="margin-top:-13px; ">
                                       <span>
                                       <a style="font-size:12px;" class="aJie grey--text mt-2  textfm1" @click="test"> Like </a> 
                                          <v-icon size="2px" class="ml-1" style="margin-top:9px;position:absolute">mdi-asterisk</v-icon>
                                       </span>
                                       <span class="ml-3">
                                       <a style="font-size:12px;" class=" aJie grey--text mt-2  textfm1" @click="test"> Dislike </a> 
                                          <v-icon size="2px" class="ml-1" style="margin-top:9px;position:absolute">mdi-asterisk</v-icon>
                                       </span>
                                       <span class="ml-3">
                                       <a style="font-size:12px;" class=" aJie grey--text mt-2  textfm1" @click="test"> Reply </a> 
                                          <v-icon size="2px" class="ml-1" style="margin-top:9px;position:absolute">mdi-asterisk</v-icon>
                                       </span>
                                       <span class="ml-3">
                                       <span style="font-size:13px;" class=" grey--text mt-2  textfm1" >  </span> 
                                       </span>

                                    </div>
                                 </v-flex>

                              </v-layout>

                              <v-layout v-else>
                                 <div  class=" mt-3">
                                    <v-btn @click="profileMenu" color="" icon style="height:34px !important; width:34px !important;margin-top:-5px" class=" jieleftNav"  flat>
                                       <v-badge color="white"  overlap class="jieBadgeNews">
                                          <v-avatar class="mr-2 " color="grey lighten-3" size="32">
                                             <img :src="commented.photoUrl" alt="">
                                          </v-avatar>
                                       </v-badge>
                                    </v-btn> 
                                 </div>
                              
                                 <v-flex xs11  style="margin-top:12px;margin-left:-4px" >
                                    <p style="word-wrap:break-word !important;max-width:98%;bwidth: auto !important" class=" grey lighten-3 jie3Commented">
                                       <router-link class="caption font-weight-bold blue--text text--darken-3 aJie" to="/profile/jiecel.marianne">{{commented.displayName}}</router-link>
                                       {{commented.data}}
                                    </p>
                                    <div class="caption ml-3" style="margin-top:-13px; ">
                                       <span>
                                       <a style="font-size:12px;" class="aJie grey--text mt-2  textfm1" @click="test"> Like </a> 
                                          <v-icon size="2px" class="ml-1" style="margin-top:9px;position:absolute">mdi-asterisk</v-icon>
                                       </span>
                                       <span class="ml-3">
                                       <a style="font-size:12px;" class=" aJie grey--text mt-2  textfm1" @click="test"> Dislike </a> 
                                          <v-icon size="2px" class="ml-1" style="margin-top:9px;position:absolute">mdi-asterisk</v-icon>
                                       </span>
                                       <span class="ml-3">
                                       <a style="font-size:12px;" class=" aJie grey--text mt-2  textfm1" @click="test"> Reply </a> 
                                          <v-icon size="2px" class="ml-1" style="margin-top:9px;position:absolute">mdi-asterisk</v-icon>
                                       </span>
                                       <span class="ml-3">
                                       <span style="font-size:13px;" class=" grey--text mt-2  textfm1" >  </span> 
                                       </span>

                                    </div>
                                 </v-flex>

                              </v-layout>
                  
                           </v-flex>
                        </v-flex>

                        <v-flex v-if="newsfeed.someoneComment.someone == true & disableWrite == false" xs12 class="mx-5 px-2 mt-2">
                           <div xs12>
                              <v-progress-circular
                                 :width="1"
                                 :size="13"
                                 color="blue lighten-1"
                                 indeterminate
                              ></v-progress-circular>
                              <span class="caption font-weight-thin grey--text textfm1">Someone is typing...</span>
                           </div>
                        </v-flex>

                        <v-flex xs12 class="mx-2">
                           <v-layout>
                              <v-card flat xs1 class="transparent mt-3">
                                 <v-btn @click="profileMenu" color="transparent" icon style="height:34px !important; width:34px !important;margin-top:-5px" class=" jieleftNav"  flat>
                                    <v-badge color="white"  overlap class="jieBadgeNews">
                                       <v-avatar class="mr-2 " color="grey lighten-3" size="32">
                                          <img :src="userData.photoUrl" alt="">
                                       </v-avatar>
                                    </v-badge>
                                 </v-btn> 
                              </v-card>
                              <v-flex  xs11 style="margin-top:-7px;margin-left:-5px">
                                 <v-form @submit.prevent="commentPost(newsfeed,newsfeed.keyIndex, userData, newsfeed.commentText)">
                                    <v-text-field  
                                       color="blue lighten-2"
                                       background-color="white lighten-3"
                                       single-line
                                       solo
                                       hint="Press Enter to comment"
                                       flat
                                       height="32"
                                       full-width
                                       v-model="newsfeed.commentText"
                                       :loading="false"
                                       placeholder="Write a comment .. . "
                                       @blur="blurPost(newsfeed.keyIndex, userData, newsfeed.commentText)"
                                       @input="inputPost(newsfeed.keyIndex, userData, newsfeed.commentText)"
                                       @click:append="commentPost(newsfeed,newsfeed.keyIndex, userData, newsfeed.commentText)"
                                       append-icon="mdi-send"
                                       style="font-size:12px"
                                       class="font-weight-thin-light jie3 "
                                    ></v-text-field>
                                    <!-- <v-textarea  
                                       color="blue lighten-2"
                                       background-color="grey lighten-5"
                                       solo
                                       auto-grow
                                       rows="1"
                                       flat
                                       hint="Press Enter to comment"
                                       v-model="newsfeed.commentText"
                                       :loading="false"
                                       placeholder="Write a comment .. . "
                                       @blur="blurPost(newsfeed.keyIndex, userData, newsfeed.commentText)"
                                       @input="inputPost(newsfeed.keyIndex, userData, newsfeed.commentText)"
                                       @click:append="commentPost(newsfeed.keyIndex, userData, newsfeed.commentText)"
                                       append-icon="mdi-send"
                                       style="font-size:12px"
                                       class="font-weight-thin-light  writeComment  "
                                    ></v-textarea> -->
                                 </v-form>
                              </v-flex>
                           
                           </v-layout>
                        </v-flex>
                     </v-layout>
                  </v-layout>
               </v-card>

               <infinite-loading class="red" style="height:0px;margin-left:-46px" spinner="waveDots" @infinite="infiniteHandler" v-if="availableNews"></infinite-loading>
            <v-card class="mt-1" v-if="doneLoadNews" flat v-for="loadnumbers in 2" :key="loadnumbers.index" style="margin-bottom:2px;"   >
               <v-layout wrap class="newscard py-2" >
                  <v-flex xs12 class="mx-2">
                     <v-layout>
                        <div class="mx-2" style="margin-top:-10px;height:38px;width:38px !important" >
                           <v-progress-linear height="38px" style="border-radius:50% !important" background-opacity="0.8" color="grey lighten-2" :indeterminate="true"></v-progress-linear>
                        </div>
                        <div class="" style=";margin-top:-7px;height:25px;width:150px !important" >
                           <v-progress-linear height="18px" style="margin-top:13px;border-radius:12px !important" color="grey lighten-1" ></v-progress-linear>
                           <v-progress-linear height="10px" style="margin-top:-10px !important;width:70px;border-radius:12px !important" color="grey lighten-1"></v-progress-linear>
                        </div>
                        <v-spacer></v-spacer>
                        <v-menu open-on-hover style="margin-top:-20px;" offset-y nudge-left="80"> 
                           <v-btn
                              slot="activator"
                              icon
                              outline
                              color="transparent"
                              round
                              small
                              style="font-size:12px" class="font-weigth-bold textfm1 textDefault"
                           >
                              <v-avatar size="13">
                                 <img src="https://png.icons8.com/ios/50/424242/expand-arrow-filled.png">
                              </v-avatar>
                           </v-btn>
                        </v-menu>
                     </v-layout>
                  </v-flex>
                  <v-flex class="mx-3" style="margin-top:40px;" xs12  >

                        <v-progress-linear :indeterminate="true" height="8"  style="width:100%;margin-top:-10px;border-radius:3px !important" background-opacity="0.5" color="grey lighten-4" ></v-progress-linear>
                        <v-progress-linear height="10" query style="width:80%;margin-top:-10px;border-radius:3px !important" background-opacity="0.5" color="grey lighten-3"></v-progress-linear>
                        <v-progress-linear height="16"  style="width:20%;border-radius:3px !important" background-opacity="0.5" color="grey lighten-2" ></v-progress-linear>
                        <v-progress-linear height="9" query style="width:37%;margin-top:-10px;border-radius:3px !important" background-opacity="0.5" color="grey lighten-2"></v-progress-linear>
                        <v-progress-linear height="10" query style="width:80%;margin-top:-10px;border-radius:3px !important" background-opacity="0.5" color="grey lighten-2"></v-progress-linear>
                        <v-progress-linear height="15" query style="width:37%;margin-top:-10px;border-radius:3px !important" background-opacity="0.5" color="grey lighten-3" ></v-progress-linear>
                        <v-progress-linear height="15" style="width:10%;border-radius:3px !important" background-opacity="0.5" color="grey lighten-3" ></v-progress-linear>
                        <v-progress-linear height="6"  style="width:20%;border-radius:3px !important" background-opacity="0.5" color="grey lighten-3" ></v-progress-linear>
                        <v-progress-linear height="15" query style="width:37%;margin-top:-10px;border-radius:3px !important" background-opacity="0.5" color="grey lighten-3" ></v-progress-linear>
                  </v-flex>
               </v-layout>
            </v-card>
           
            <!-- <v-card class="my-2" >
               <v-card-media
                  height=""
               >
                  <v-container fill-height fluid>
                     <v-layout fill-height>
                     <v-flex>
                        <v-btn small block @click="scrollLoadNews">Load More</v-btn>
                     </v-flex>
                     </v-layout>
                  </v-container>
               </v-card-media>
            </v-card> -->
         </v-flex>

<!-- xs12 sm12 md8 lg7 -->
 <!-- xs0 sm0 md4 lg4 -->
         <v-flex  class="md4 hidden-sm-and-down" >
            <v-card flat class="white lighten-4 my-1" height="50px">
            </v-card>
            <v-card flat  class="grey lighten-4 mb-2" height="150px">
            </v-card>
            <v-card flat class=" grey lighten-4 my-1" height="50px">
            </v-card>
            <v-card flat  class="grey lighten-4 mb-2" height="150px">
            </v-card>
            <v-card flat  class="grey lighten-4 mb-2" height="150px">
            </v-card>
         </v-flex>
      </v-layout>
   </v-card>

</template>
<script>
import { db, app, order } from '../../firebase.js';

import InfiniteLoading from 'vue-infinite-loading';

export default {  
   components: {
       InfiniteLoading
   },
   firebase: function () {
      return {
         // newsfeeds: newsfeedRef,
      }
   },
   data: () => ({
      searchEmoji:'',
      imgsPercentage: 0,
      newsImgsUrl: [],
      disableWrite: false,
      doneLoadNews:true,
      AnimateHeart: '',
      sectionLove: "blue-grey--text",
      disAbleReact: false,
      offsetTop: 0,
      timeAgoFormat: "",
      availableNews: true,
      newsFeedsValueRef: [],
      newsFeedLimit: 2,
      timeDisplay: '',
      greet: '',
      worldTime: [],
      whatisFunction: false,
      whatisClass: "",
      bottomNav: 'recent',
      whatisFlex: 'xs7',
      userComment: '',
      timestamp: '',
      items: [
        { title: 'Op jie1' },
        { title: 'Op jie2' },
      ],
      postedData: { 
         message:'', 
         image:''
      },
  }),
   computed: {
      commenteds(dataOf) {
         return dataOf;
      },
      newsfeeds() {
         // return this.newsFeedsValueRef;
         // let limitCommented = _.drop([this.newsFeedsValueRef.commented],2)
         return _.orderBy(this.newsFeedsValueRef, 'order');
      },
      userData() {
         return this.$store.getters.accountLoginData.user
      },
      firstname() {
         var getFn = this.$store.getters.accountLoginData.user.displayName
         var firstname = getFn.split(" ");
         return firstname[0];
      },
      postedDataNews() {
         if (this.postedData.message == "") return true
         this.postedData.message != ""
         return false
      },
   },
   methods: {
      insert(emoji) {
         this.postedData.message += emoji
      },
      photoBtn() {
         this.$refs.newsFile.click();
      },
      newPostBtn() {
         let vm = this
         vm.$nextTick(() => vm.$refs.newP.focus());
      },
      createImage(file) {
         // this.createImage(this.newsImgs[0]);
         var image = new Image();
         var reader = new FileReader();
         var vm = this;
         reader.onload = (e) => {
           vm.ImgsReader = e.target.result;
         };
         reader.readAsDataURL(file);
      },
      addFile(event) {
         let vm = this;
         var idCode =  Math.random().toString(36).substring(2, 15)  + Math.random().toString(36).substring(2, 15)  + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
         var file = event.target.files;
         var imgKeys = Object.keys(file);
         if(file.length > 0) {
            console.log("only1")
               imgKeys.forEach( function(key) {
                  var storageRef = firebase.storage().ref('dummyUploads/'+ idCode+file[key].name);
                  var task = storageRef.put(file[key]);
                  task.on('state_changed', 
                     function progress(snapshot) {
                        var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                        // vm.newsImgsUrl[key].percent = percentage;
                        console.log(percentage)
                        vm.imgsPercentage = percentage
                        if(percentage == 100) {
                           var starsRef = firebase.storage().ref(snapshot.metadata.fullPath);
                           starsRef.getDownloadURL().then(function(url) {
                              // vm.newsImgsUrl[key].imgUrl = url;
                              vm.$nextTick(() => vm.$refs.newP.blur());
                              vm.$nextTick(() => vm.$refs.newP.focus());
                              vm.$nextTick(() => vm.$refs.newP.blur());
                              vm.$nextTick(() => vm.$refs.newP.focus());
                              vm.newsImgsUrl[key] = Object.assign({}, vm.newsImgsUrl[key], {
                                 imgUrl : url
                              })
                           })
                        }
                     },
                     function error(error) {
                        console.log(error);
                     },
                     function complete() {
                        // alert('complete')
                     }
                  );
               });
         }
      },
      newsAtUnlike(newsfeed){
         this.disAbleReact=true
         this.AnimateHeart = newsfeed.keyIndex
         db.ref(`Newsfeed/${newsfeed.keyIndex}/whoLikes/${this.userData['ckcm-network_token_id']}`).remove();
         db.ref(`Newsfeed/${newsfeed.keyIndex}/`).update({
            likes: newsfeed.likes - 1
         })
         this.disAbleReact=false
      },
      newsAtLike(newsfeed) {
         // this.AnimateHeart="heartFav"
         this.AnimateHeart = newsfeed.keyIndex
         this.disAbleReact=true
         axios.get('https://api.ipgeolocation.io/ipgeo?apiKey=90a83c7326cc475f8048cf81362e1df0')
            .then((response) =>{
            // var now= moment(response.data.time_zone.current_time).tz(response.data.time_zone.name).format('MMMM D YYYY, kk:mm:ss');
            var now= response.data.time_zone.current_time
            let vm = this
            // var now = moment().format("MMMM D YYYY, kk:mm:ss");
            // console.log(now)
            db.ref(`Newsfeed/${newsfeed.keyIndex}/whoLikes/${vm.userData['ckcm-network_token_id']}` ).set({
               userId: vm.userData['ckcm-network_token_id'],
               displayName: vm.userData.displayName,
               photoUrl: vm.userData.photoUrl,
               timestamp:  now,
            }, function(error) {
            if (error) {
               console.log(error) 
               db.ref(`Newsfeed/${newsfeed.keyIndex}/`).update({
                  likes: newsfeed.likes - 1
               })
            } else {
               // vm.AnimateHeart = ""
               vm.disAbleReact=false
               db.ref(`Newsfeed/${newsfeed.keyIndex}/`).update({
                  likes: newsfeed.likes + 1
               })
               // Data saved successfully!
            }
            });
         });
      },
      reloadNews() {
         let vm = this
         vm.newsFeedLimit = 1 ;
         var newsFeedsValue  = db.ref('Newsfeed').limitToLast(vm.newsFeedLimit);
         newsFeedsValue.on('value', function(gotData) {
            let keys = Object.keys(gotData.val())
            // console.log(keys)
            // gotData.val().text = "test"
            vm.newsFeedsValueRef = gotData.val()
            keys.forEach( function (key) {
            //  console.log(gotData.val()[key], key)
               vm.newsFeedsValueRef[key].keyIndex = key
            })
         })
      },
      onScroll (e) {
        this.offsetTop = e.target.scrollTop
        console.log(this.offsetTop)
      },
      infiniteHandler($state) {
         this.doneLoadNews=true
         let vm = this;
         vm.newsFeedLimit += 5;
         // setTimeout(() => {
            var newsFeedsValue  = db.ref('Newsfeed').limitToLast(vm.newsFeedLimit);
            newsFeedsValue.on('value', function(gotData) {
               let keys = Object.keys(gotData.val())
               vm.newsFeedsValueRef = gotData.val()
               keys.forEach( function (key) {
                  vm.newsFeedsValueRef[key].keyIndex = key
                  var commentedValue = db.ref(`Newsfeed/${key}/commented`).limitToLast(4);
                  commentedValue.on('value', function (commentedData) {
                     vm.newsFeedsValueRef[key].commentedLimit = commentedData.val()
                     // console.log(commentedData.val())
                  })
                  // vm.newsFeedsValueRef[key].limitCommented  = commentedValue
                  // vm.newsFeedsValueRef[key].commented
                  // console.log(vm.newsFeedsValueRef)
               })
               if(vm.newsfeeds.length == vm.newsFeedLimit){
                  vm.availableNews=true
                  $state.loaded()
                  vm.doneLoadNews=true
               }else{
                  vm.availableNews=false
                  vm.doneLoadNews=false
               }
               });
         // }, 1000);
      },
      test() {
         alert("success")
      },
      blurPost(id,user,commentText) {
         let vm = this
         vm.disableWrite = false
         db.ref(`Newsfeed/${id}/`).child('someoneComment').set({
            someone:false
         }, function(error) {
         if (error) {
            console.log(error)
            // The write failed...r
         } else {
            // Data saved successfully!
         }
         });
      },
      inputPost(id,user,commentText) {
         let vm = this
         vm.disableWrite= true
         db.ref(`Newsfeed/${id}/`).child('someoneComment').set({
            someone:true
         }, function(error) {
         if (error) {
            console.log(error)
            // The write failed...r
         } else {
            // Data saved successfully!
         }
         });
      },
      commentPost(newsfeed, id,user,commentText) {
         let vm = this
         let countRecent = newsfeed.comments
         let myId = _.filter(newsfeed.commented, { userId : vm.userData['ckcm-network_token_id']})
         if (myId.length == 0 ){
            db.ref(`Newsfeed/${id}`).update({
               comments: countRecent + 1
            })
            db.ref(`Newsfeed/${id}/whoComments/${user['ckcm-network_token_id']}`).set({
               userId: user['ckcm-network_token_id']
            })
         }
         db.ref(`Newsfeed/${id}/commented`).push().set({
            userId: user['ckcm-network_token_id'],
            displayName: user.displayName,
            data: commentText,
            photoUrl: user.photoUrl,
            timestamp: "",
         }, function(error) {
         if (error) {
            console.log(error)
            // The write failed...r
         } else {
            db.ref(`Newsfeed/${id}/`).child('someoneComment').set({
               someone:false
            }) 
            // Data saved successfully!
         }
         });
      },
      makePost(user) {
         this.postedData.image = this.newsImgsUrl
         this.postedData.image.count = this.postedData.image.length
         axios.get('https://api.ipgeolocation.io/ipgeo?apiKey=90a83c7326cc475f8048cf81362e1df0')
            .then((response) =>{
            // var now= moment(response.data.time_zone.current_time).tz(response.data.time_zone.name).format('MMMM D YYYY, kk:mm:ss');
            var now= response.data.time_zone.current_time
            let vm = this
            // var now = moment().format("MMMM D YYYY, kk:mm:ss");
            // console.log(now)
            db.ref('Newsfeed/' ).push().set({
               userId: user['ckcm-network_token_id'],
               displayName: user.displayName,
               data: vm.postedData,
               photoUrl: user.photoUrl,
               timestamp:  now,
               someoneComment: false,
               commentText: "",
               likes: 0,
               comments: 0,
               whoLikes: {php:'php'},
               whoComments: {python:'python'},
               order: vm.orderValue + 1 
            }, function(error) {
            if (error) {
               console.log(error)
               // The write failed...r
            } else {
               db.ref('N_order/').set ({
                  newsfeedOrder: vm.orderValue-1
               })
               vm.postedData.message = "";
               vm.postedData.image = [];
               vm.newsImgsUrl = [];
               vm.whatisFunctionMethodFalse()
               // Data saved successfully!
            }
            });
         });

      },
      whatisFunctionMethod () {
         this.whatisClass = "mb-1 elevation-24"
         this.whatisFunction = true
         this.whatisFlex = "xs11"
      },
      whatisFunctionMethodFalse () {
         // this.whatisFunction = false
         // this.whatisClass = ""
         // this.whatisFlex = "xs7"
         if(this.postedData.message == "") {
            this.whatisFunction = false
            this.whatisClass = ""
            this.whatisFlex = "xs7"
         } else {
            
         }
      },
      profileMenu () {
         const displayName= this.$store.getters.accountLoginData.user.displayName;
         const user = displayName.toLocaleLowerCase().replace(/[ ]/g, ".");
         this.$router.push({
            path: `/profile/${user}`,
         });
      },
      profileMenuFriend (displayName) {
         const user = displayName.toLocaleLowerCase().replace(/[ ]/g, ".");
         this.$router.push({
            path: `/profile/${user}`,
            });
      }
   },
   mounted: function() {

      this.$store.commit("leftnavDrawerOn");

      var date = new Date();
      let vm = this;
      // setTimeout(function() {
         setInterval(()=>{
            axios.get('https://api.ipgeolocation.io/ipgeo?apiKey=90a83c7326cc475f8048cf81362e1df0')
               .then((response) =>{
                  vm.worldTime=response.data
                  vm.timeDisplay = moment(vm.worldTime.time_zone.current_time).tz(vm.worldTime.time_zone.name).format('h:mma');
                  vm.timestamp =  vm.worldTime.time_zone.current_time
                  let hour = moment(vm.worldTime.time_zone.current_time).tz(vm.worldTime.time_zone.name).format('h');
                  let a = moment(vm.worldTime.time_zone.current_time).tz(vm.worldTime.time_zone.name).format('a');
                     if ( a == 'pm' && hour >= 1 && hour <= 5 || a == 'pm' && hour == 12) {
                        vm.greet = "Good afternoon , " +vm.firstname;
                     } else if ( a == 'pm' && hour >= 6) {
                        vm.greet = "Good evening , " + vm.firstname;
                     } else if (a == 'am' && hour >= 1 && hour <= 6) {
                        vm.greet = "Sayuha nimu , " + vm.firstname;
                     } else {
                        vm.greet = "Good morning , " + vm.firstname;
                     }
                     })
               .catch((err) => { 
                  console.log(err)
               })
               // MMMM Do YYYY ss,
         },60000)
      // }, (60 - date.getSeconds()) * 1000);
   },
   created() {

      document.title = "Christ the King Network";
      
      let vm = this;

      order.on("value",  function(snapshot) {
         vm.orderValue = snapshot.val();
      }, function (errorObject) {
         console.log("Naa ko sa created 1 :The read failed: " + errorObject.code);
      });


      axios.get('https://api.ipgeolocation.io/ipgeo?apiKey=90a83c7326cc475f8048cf81362e1df0')
         .then((response) =>{
            vm.worldTime=response.data
            vm.timeDisplay = moment(vm.worldTime.time_zone.current_time).tz(vm.worldTime.time_zone.name).format('h:mma');
            vm.timestamp =  vm.worldTime.time_zone.current_time
            vm.timeAgoFormat = moment(response.data.time_zone.current_time).tz(response.data.time_zone.name).format('MMMM D YYYY, kk:mm:ss');
            let hour = moment(vm.worldTime.time_zone.current_time).tz(vm.worldTime.time_zone.name).format('h');
            let a = moment(vm.worldTime.time_zone.current_time).tz(vm.worldTime.time_zone.name).format('a');
               if ( a == 'pm' && hour >= 1 && hour <= 5 || a == 'pm' && hour == 12) {
                  vm.greet = "Good afternoon , " + vm.firstname;
               } else if ( a == 'pm' && hour >= 6) {
                  vm.greet = "Good evening , " + vm.firstname;
               } else if (a == 'am' && hour >= 1 && hour <= 6) {
                  vm.greet = "Sayuha nimu , " + vm.firstname;
               } else {
                  vm.greet = "Good morning , " + vm.firstname;
               }
         })
         .catch((err) => { 
            console.log(err)
         })
   
   },
   
}
</script>
