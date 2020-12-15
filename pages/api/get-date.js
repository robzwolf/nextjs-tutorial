import ReactDOMServer from 'react-dom/server';
import Date from "../../components/date";

export default function handler(req, res) {
    if (req.method === 'POST') {
        const {dateString} = req.body;
        const html = ReactDOMServer.renderToStaticMarkup(<Date dateString={dateString} />);
        res.status(200).send(html);
    } else {
        res.status(405).send("405 bad request");
    }
}
