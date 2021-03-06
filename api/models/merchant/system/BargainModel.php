<?php
/**
 *
 * @version   2019年10月06日
 * @author    WangJianRen <18261707840@163.com>
 * @license   PHP Version 7.x {@link http://www.php.net/license/3_0.txt}
 * @Bean()
 */
namespace app\models\merchant\system;

use yii\db\Exception;
use app\models\common\CommonModel;

class BargainModel extends CommonModel{

    public static function tableName() {
        return 'shop_bargain_record';
    }

    /**
     * 查询列表接口
     * 地址:/admin/group/list
     * @throws Exception if the model cannot be found
     * @return array
     */
    public function do_select($params) {
        //数据库操作
        $params['count'] = true;
        $res = $this->get_list($params);
        if (empty($res)) {
            return result(204, '查询失败');
        } else {
            return ['status' => 200, 'message' => '请求成功', 'data' => $res['data'], 'count' => $res['count']];
        }
    }

    public function do_one($params) {

        $res = $this->get_info($params);

        if (empty($res)) {
            return result(204, '查询失败');
        } else {
            return result(200, '请求成功',$res);
        }
    }

    public function do_add($params) {
        $data = array();
        $res = $this->modify($params, $data);
        if (empty($res)) {
            return result(204, '查询失败');
        } else {
            return result(200, '请求成功',$res);
        }
    }

    public function do_update($where, $data) {

        $res = $this->modify($where, $data);
        if ($res == false) {
            return result(500, '更新失败');
        } else {
            return result(200, '请求成功');
        }
    }

    public function do_delete($where) {
        $res = $this->soft_delete($where);
        if ($res == false) {
            return result(500, '删除失败');
        } else {
            return result(200, '请求成功');
        }
    }



}