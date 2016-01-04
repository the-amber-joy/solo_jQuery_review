/**
 * Created by amberjoy on 1/4/16.
 */

$.ajax('data.json').then(function(response){
    for (var i = 0; i < response.length; i++){
        var $content = '';

        $id = response[i].id;
        $gender = response[i].gender;
        $first_name = response[i].first_name;
        $last_name = response[i].last_name;
        $email = response[i].email;

        $content = 'ID: ' + $id + '<br>' + 'Gender: ' + $gender + '<br>' + 'First Name: ' + $first_name + '<br>' + 'Last Name: ' + $last_name + '<br>' + 'Email: ' + $email + '<br><br>';

        console.log($content);

        $('.appendHere').append($content);

    }
});