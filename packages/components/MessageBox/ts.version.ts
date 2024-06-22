import MessageBox from "./MessageBox.vue";
import { createApp } from "vue";

function alert(content: string, done?: Function, title: string = "系统提示") {
  const messageBox = createApp(MessageBox, {
    title,
    content,
    close:()=>{
        done && done();
        messageBox.unmount();
        document.documentElement.removeChild(div)
    },
  });

  const div = document.createElement("div");
  messageBox.mount(div);
  document.documentElement.appendChild(div);
}
MessageBox.alert = alert;

export { MessageBox };
