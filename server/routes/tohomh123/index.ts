import util from './utils';
import axios from '../../utils/axios';
import configData from '../../shared/config';

export default async function tuHao(ctx: any) {
  const { type, name: realName, page: pageSize } = ctx.request.query;
  const name = decodeURIComponent(realName);
  let temp;
  let response;
  if (configData.typeConfig.search === type) {
    response = await axios.get(util.getSearchUrl(name));
    temp = util.getSearchList(response.data);
  }
  if (configData.typeConfig.chapter === type) {
    response = await axios.get(name);
    temp = util.getChapterList(response.data);
  }
  if (configData.typeConfig.download === type) {
    response = await axios.get(name);
    temp = util.getDownloadItem(response.data, pageSize);
  }
  ctx.state.data = temp;
}