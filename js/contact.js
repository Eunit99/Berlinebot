   /*
   =================================
   *Dialogue confirmation for Berline bot
   *Copyright: EunitDesigns.com
   *Script developed by Eunit
   =================================

   =========DO NOT MODIFY===========

   */
   //<![CDATA[
   function Twitter() {
           //When button is clicked, alert that...
           alert("");
           return false;
       }
       //]]>
       //<![CDATA[
   function Pinterest() {
           //When button is clicked, alert that...

           alert("");
           return false;
       }
       //]]>
       //<![CDATA[
   function Instagram() {
           //When button is clicked, alert that...

           alert("");
           return false;
       }
       //]]>
       //<![CDATA[
   function Googleplus() {
           //When button is clicked, alert that...

           alert("");
           return false;
       }
       //<![CDATA[
   function GetInTouch() {
           //When button is clicked, alert that...

           alert("Use the social media accounts to connect with me");
           return false;
       }
       //]]>
       //<![CDATA[
   function mail() {
           var confS = confirm("You are about to mail me, do you wish to continue?");
           if (confS == true) {
               window.location = "mailto:berlinebot@gmail.com";
               return true;
           } else {

               return false;
           }
       }
       //]]>
       //<![CDATA[
   function Call() {
       var confC = confirm("Do you really want to call me?");
       if (confC == true) {
           window.location = "tel:+2348110863115";
           return true;
       } else {

           return false;
       }
   }

   //]]>
