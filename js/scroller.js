/**
 * Created by Rémy Kaloustian on 14/04/2016.
 */
$(document).ready(function() {
    $('#landing_download').click(function()
    {
        var the_id = $(this).attr("href"); //On localise la cible de l'ancre

        $('html, body').animate( //--> On anime en faisant un scroll slow jusqu'à la cible
            {
                scrollTop:$(the_id).offset().top
            }, 'slow');
        return false;
    });
});