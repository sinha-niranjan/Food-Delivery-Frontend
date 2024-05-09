import { Button } from "./ui/button";

const MainNav = () => {
  return (
    <Button
      variant={"ghost"}
      className="font-bold text-lg hover:text-orange-500 hover:bg-white "
    >
      Log In
    </Button>
  );
};

export default MainNav;
