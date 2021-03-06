var insertContributorsExec = false;


function insertContributors(AllContributors){
    // This removes the spinner icon as soon as contributors list is loaded
    document.getElementById("spinner-icon").style.display = "none";
  
    let totalContributors = 0;
    var usernames = AllContributors.map(function getContributorUsername(c) {
      return `@${c.login}`;
    });
    var avatars = AllContributors.map(function getContributorAvatarURL(c) {
      return `<a href="#" title="${c.login}"><img width="100px" src="${c.avatar_url}"></a>`;
    });
    totalContributors += AllContributors.length;
    if(insertContributorsExec) $('.contributors > .usernames').append(', ');
    $('.contributors-head').html('Contributors ('+totalContributors+'+)');
    $('.contributors > .usernames').append(usernames.join(', '));
    $('.contributors > .avatars').append(avatars.join(''));
    insertContributorsExec=true;
  }


module.exports = {
    insertContributors: insertContributors,
};