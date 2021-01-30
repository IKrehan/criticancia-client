import "./SectionHeader.css";

function SectionHeader(props) {
  return (
      <div className="mx-5">
          <h3 className="title-header mx-3">{props.title}</h3>
      </div>
  );
}

export default SectionHeader;