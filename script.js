const profilePic = document.getElementById('profile-pic');
const profileUpload = document.getElementById('profile-upload');

profileUpload.addEventListener('change', function() {
    const file = this.files[0];

    if (file) {
        const reader = new FileReader();

        reader.addEventListener('load', function() {
            profilePic.src = this.result;
            profilePic.style.display = 'block';
        });

        reader.readAsDataURL(file);
        
    }
});