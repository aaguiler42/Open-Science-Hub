import { NodeData } from "../../types";
import { Badge } from "../ui/badge";
import openSVG from "../../assets/open.svg";
import { useModalContext } from "../../contexts/ModalContext";

export default function PersonElement({
  id,
  node,
  selected = false,
  onClick,
}: {
  id: string;
  node: NodeData;
  selected?: boolean;
  onClick?: () => void;
}) {
  const { setProfileModal } = useModalContext();

  return (
    <div
      id={id}
      key={node.id}
      onClick={onClick}
      style={{
        position: "relative",
        padding: "1rem",
        maxHeight: "18rem",
        display: "flex",
        flexDirection: "column",
        width: "100%",
        textAlign: "left",
        backgroundColor: selected ? "rgba(255, 255, 255, 0.1)" : "transparent",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "1rem",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "5rem",
            height: "5rem",
            borderRadius: "50%",
            overflow: "hidden",
          }}
        >
          {node.person && (
            <img
              src={"https://thispersondoesnotexist.com"}
              alt={node.person.name}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          )}
        </div>
        <div>
          <h3
            style={{
              fontWeight: "bold",
            }}
          >
            {node.label}
          </h3>
          <span>Guapo e inteligente</span>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          gap: "1rem",
          marginTop: ".5rem",
        }}
      >
        <Badge>AI</Badge>
        <Badge>Data</Badge>
        <img src={openSVG} alt="open" style={{
            position: "absolute",
            top: "1.5rem",
            right: "1rem",
            cursor: "pointer",
            width: "1.5rem",
            height: "1.5rem",
        }} onClick={() => setProfileModal(true)} />
      </div>
      {/* <p
            style={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              width: "20px",
              whiteSpace: "nowrap",
            }}
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod at
            ducimus officia sed, nihil dicta voluptatum blanditiis, voluptatem
            ad voluptate odit, nemo similique consequuntur a atque molestiae
            quaerat alias ipsam!
          </p> */}
    </div>
  );
}
