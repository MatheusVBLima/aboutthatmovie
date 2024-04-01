import { Separator } from "./ui/separator";

export function Sidebar() {
  return (
    <div className="flex flex-col border">
      <div className="px-2 py-2.5 text-center">
        <h1>Menu</h1>
      </div>
      <Separator />
      <div>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
}
