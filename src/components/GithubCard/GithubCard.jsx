import Card from "../Card/Card";
import CardHeader from "../CardHeader/CardHeader";
import CardContent from "../CardContent/CardContent";
import CardFooter from "../CardFooter/CardFooter";

function GithubCard({ data }) {
  return (
    <Card url={data.html_url}>
      <CardHeader type="github" />
      <CardContent title={data.full_name} description={data.description} />
      <CardFooter
        type="github"
        stars={data.stargazers_count}
        dateModified={data.updated_at}
        forks={data.forks_count}
      />
    </Card>
  );
}

export default GithubCard;
