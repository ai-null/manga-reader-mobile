import React from 'react';
import ChapterItem from './ChapterItem';

type Props = {
  data: Array,
  chapters_len: Number,
};

export default class ChapterList extends React.PureComponent<Props, {}> {
  render() {
    const {data, chapters_len} = this.props;
    const chapters =
      chapters_len > 5 ? data.reverse().slice(0, 5) : data.reverse();

    return chapters.map(e => {
      const t = `Chapter ${e[0]}`;
      return <ChapterItem key={e[3]} title={t} />;
    });
  }
}
