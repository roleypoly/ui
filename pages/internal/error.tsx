import { NextPageContext } from 'next';
import { Error as ErrorTemplate } from 'templates/errors';
import { useUser } from 'systems/user';

type Props = {
    statusCode: string;
};

const ErrorPage = (props: Props) => {
    return <ErrorTemplate user={useUser().user} code={props.statusCode || 404} />;
};

ErrorPage.getInitialProps = (ctx: NextPageContext): Props => {
    const statusCode = (ctx.query.errorCode as string) ?? 'default';
    return { statusCode };
};

export default ErrorPage;
