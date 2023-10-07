export default function Nav() {

    return(
      <nav style={{
        display: "flex",
        borderBottom: "1px solid #bbb",
        justifyContent: "space-between",
        alignItems: "center",
        height: "4vh",
        paddingInline: "2rem"
      }}>
        <span style={{
          fontWeight: "bold"
        }}>OSH</span>

      <h1>Open Science Projects</h1>
      <div>User</div>
      </nav>
  )
}
