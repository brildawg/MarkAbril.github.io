function changeProfileImage(event) {
  
    const selectedFile = event.target.files[0];


    const profileImage = document.getElementById('profileImage');
    profileImage.src = URL.createObjectURL(selectedFile);


    console.log(`Selected file: ${selectedFile.name}`);
}