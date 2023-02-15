import { Avatar, Badge, IconButton } from "@mui/material";
import ChatinList from "./ChatinList";

function ChatList() {
  return (
    <div className="p-2 flex overflow-x-auto flex-col items-start w-full gap-1">
        <ChatinList userName="tchisama" lastMsg="hello man how are you " state={3}/>
    </div>
  );
}

export default ChatList;