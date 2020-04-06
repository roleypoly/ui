import { NextPageContext } from 'next';
import { Error as ErrorTemplate } from 'templates/errors';
import { useUser } from 'systems/user';

type Props = {
    statusCode: number | undefined;
};

const ErrorPage = (props: Props) => (
    <ErrorTemplate user={useUser().user} code={props.statusCode || 404} />
);

ErrorPage.getInitialProps = ({ res, err }: NextPageContext): Props => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
    return { statusCode };
};

export default ErrorPage;
