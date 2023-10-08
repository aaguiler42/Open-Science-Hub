import { NodeData } from "../../types";
import { Badge } from "../ui/badge";
import openSVG from "../../assets/open.svg";
import chartSVG from "../../assets/chart.svg";
import { useModalContext } from "../../contexts/ModalContext";

export default function ProjectElement({
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
  const { setCompaniesModal, setStatsModal } = useModalContext();

  return (
    <div
      id={id}
      key={node.id}
      onClick={onClick}
      style={{
        position: "relative",
        padding: "1rem",
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
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "16rem",
            overflow: "hidden",
          }}
        >
          {node.project && (
            <img
              src={node.project.image}
              alt={node.project.title}
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
          <span>{node.project?.description}</span>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          gap: "1rem",
          marginTop: ".5rem",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: ".5rem",
            marginTop: ".5rem",
            maxWidth: "80%",
            overflowX: "auto",
            paddingBottom: "1rem",
          }}
        >
          {node.project?.categories?.map((category) => (
            <Badge
              style={{
                backgroundColor: category.color,
              }}
              key={category.id}
            >
              {category.name}
            </Badge>
          ))}
        </div>
        <div
          style={{
            marginLeft: "auto",
            display: "flex",
            gap: "1rem",
          }}
        >
          <img
            src={chartSVG}
            alt="open"
            style={{
              marginTop: "0.3rem",
              cursor: "pointer",
              width: "1.5rem",
              height: "1.5rem",
            }}
            onClick={() => setStatsModal(true)}
          />
          <img
            src={openSVG}
            alt="open"
            style={{
              cursor: "pointer",
              width: "1.5rem",
              height: "1.5rem",
            }}
            onClick={() => setCompaniesModal(true)}
          />
        </div>
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
