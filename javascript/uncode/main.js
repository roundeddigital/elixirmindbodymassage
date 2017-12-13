<!-- Global Site Tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-52698593-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments)};
  gtag('js', new Date());

  gtag('config', 'UA-52698593-1');
</script>

<!--
//-------------------------------------
// Google Event Tracking for site forms

// [contact-form-7 id="8" title="Appointment Request"]
// [contact-form-7 id="56063" title="Career Interest"]
// [contact-form-7 id="67290" title="Contest Giveaway"]
// [contact-form-7 id="55955" title="General Contact"]
// [contact-form-7 id="67153" title="Membership Interest Form"]

/*

Place in uncode: theme options: css & js

*/
 -->
<!-- Google Analytics -->
<script>
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-52698593-1', 'auto');
ga('send', 'pageview');
</script>
<!-- End Google Analytics -->

<!--
/*

Contact 7 Form

*/
 -->
<script>
document.addEventListener( 'wpcf7mailsent', function( event ) {
    // console.log("Form 7 ID = ",event.detail.contactFormId);
    // ADD Contact 7 Form ID's and Google Analytics information here
    // [contact_form_7_id, ga_form_category, ga_form_action, ga_form_label, ga_form_value]
    var formIds = [
    [8,"Contact Form Submission","submit","appointment"],
    [56063,"Contact Form Submission","submit","career"],
    [67290,"Contact Form Submission","submit","giveaway"],
    [55955,"Contact Form Submission","submit","general"],
    [67153,"Contact Form Submission","submit","membership"]];

    for (var i=0;i<formIds.length;i++) {
      var formId = formIds[i][0];
      // console.log("Each Form ID = ",formId);
      if (event.detail.contactFormId == formId){
        var category = formIds[i][1];
        var action = formIds[i][2];
        var label = formIds[i][3];
        // console.log("Google Analytics Category = ",category);
        // console.log("Google Analytics Action = ",action);
        // console.log("Google Analytics Label = ",label);
        ga('send', 'event', category, action, label);
      }
    }
}, false );

// Telephone Number (footer) | Telephone Number (body) | Telephone Number (menu) | Telephone Number (header)
// Category: Telephone
// Action: click
// Label: footer | body | menu | header
// Value: <empty>

jQuery(document).ready(function(){
   jQuery('.telephone-number-footer, h4').click(function() {
      // console.log("Telephone Number Clicked (Footer)");
      return ga('send', 'event', 'Telephone', 'click', 'footer');
   });
   jQuery('.telephone-number-body').click(function() {
     // console.log("Telephone Number Clicked (Body)");
     return ga('send', 'event', 'Telephone', 'click', 'body');
   });
   jQuery('.telephone-number-menu').click(function() {
     // console.log("Telephone Number Clicked (Menu)");
     return ga('send', 'event', 'Telephone', 'click', 'menu');
   });
   jQuery('.telephone-number-header').click(function() {
     // console.log("Telephone Number Clicked (Header)");
    return ga('send', 'event', 'Telephone', 'click', 'header');
   });
});
</script>
