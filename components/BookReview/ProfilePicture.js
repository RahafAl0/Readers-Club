const ProfilePicture = () => {
    return(
        <div className="card border border-primary w-300px h-350px m-auto">
          <div class="card-body">
            <h5 class="text-center ">Profile Picture</h5>
            <p class="text-center">Add a nice photo of yourself for your profile.</p>
            <div className="p-10">
              <img className="rounded-circle mx-auto d-block "
                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(21).webp" alt="avatar" width="100"
                  height="100" />
            </div>
        </div>
        <div class="mb-3">
          <input className="form-control" type="file" id="formFile"/>
          
        </div>
      </div>
    )
  }

export default ProfilePicture;