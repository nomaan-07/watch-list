import { UserIcon } from "@heroicons/react/16/solid";

function UserProfile() {
  const username = "nomaan";
  const avatar = null;

  return (
    <div className="mt-2 flex flex-col items-center gap-y-3 text-center">
      <div className="flex size-16 items-center justify-center rounded-full border border-zinc-500 bg-zinc-700">
        {avatar ? (
          <img
            className="size-full rounded-full bg-cover"
            src={avatar}
            alt="user avatar"
          />
        ) : (
          <UserIcon className="size-12 text-zinc-500" />
        )}
      </div>
      <p className="text-lg text-zinc-400 capitalize">{username}</p>
    </div>
  );
}

export default UserProfile;
