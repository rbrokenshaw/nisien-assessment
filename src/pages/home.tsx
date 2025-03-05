import { useGetUsers, User, UserResponse } from "../api/users";

export const Home = () => {
  const { isLoading, data } = useGetUsers();

  //   const users: User[] = [];

  const users = data;

  if (isLoading) {
    return <>Loading...</>;
  }

  if (users?.length === 0) {
    return (
      <div className="flex px-20 w-full justify-center">
        You have not created any team members yet.
      </div>
    );
  }

  return (
    <>
      <h2 className="text-xl  font-bold mb-4">Start a Tea Round</h2>

      <p className="mb-4">
        Select participating team members, then click 'Choose!'
      </p>

      <div className="flex flex-col gap-4">
        {users?.map((user: UserResponse) => {
          return (
            <div key={user.id}>
              {user.firstName} {user.lastName}
            </div>
          );
        })}

        <button className="border p-2">Choose!</button>
      </div>
    </>
  );
};
