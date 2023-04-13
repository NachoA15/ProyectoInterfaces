let UserProfile = (function() {
    let full_name = "";
  
    let getName = function() {
      return full_name;    // Or pull this from cookie/localStorage
    };
  
    let setName = function(name) {
      full_name = name;     
      // Also set this in cookie/localStorage
    };
  
    return {
      getName: getName,
      setName: setName
    }
  
  })();
  
  export default UserProfile;