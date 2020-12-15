import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';

dayjs.extend(advancedFormat);

export default function Date({ dateString }) {
    const date = dayjs(dateString);
    return (
        <time dateTime={dateString}>
            {date.format("dddd Do MMMM YYYY")}
        </time>
    )
}
