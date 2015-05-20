if (Meteor.isClient) {


}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup

    var Twit = Meteor.npmRequire('twit');

    var T = new Twit({
        consumer_key:         'UTLoGAqL4bzhl90tJGJlatUnY', // API key
        consumer_secret:      'GpIRTzMNT0c90bvxl120sEnBBY61VV2rhs2ts2tXGiJ0bLa89n', // API secret
        access_token:         '14534530-2XDNjKtueSItjYzU0c1o38NhuNDlxVocLv8wOBOvg', 
        access_token_secret:  'GwCWsW768xXChonj1RIcCGL5sRHj0kdmin3cMzuYYUYbF'
    });

    //  search twitter for all tweets containing the word 'banana'
    //  since Nov. 11, 2011
    T.get('search/tweets',
        {
            q: 'banana since:2011-11-11',
            count: 100
        },
        function(err, data, response) {
            console.log(data);
        }
    );

  });
}