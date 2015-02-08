function getGithubInfo() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", 'http://api.github.com/users/aitkenster/repos', true);
  xhr.send();
  console.log(xhr.responseText);
  return xhr;
}

function transform(data){
 return  _.chain(data)
    .sortBy(function(repo){
      return Number(repo.stargazers_count);
    })
    .reverse()
    .first(20)
    .value();
}
