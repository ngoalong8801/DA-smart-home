<?php
require_once "mvc/utils/utils.php";
class OrderModel extends DB
{
    public function insertOrders($user_id, $fullname, $address, $phone, $email, $totalMoney)
    {
        //insert
        $created_at = date("Y-m-d H:i:s");
        $sql = "insert into orders(user_id, fullname, address, phone, email, created_at, total_money) values ('$user_id','$fullname', '$address','$phone','$email','$created_at','$totalMoney')";
        $this->execute($sql);
    }

    public function insertOrderDetail($order_id, $product_id, $price, $num, $totalMoney)
    {
        //insert
        $sql = "INSERT INTO order_details(order_id, product_id, price, num, total_money) 
                VALUES ('$order_id','$product_id','$price','$num','$totalMoney')";
        $this->execute($sql);
    }

    public function getOrderId($user_id)
    {
        $sql = "SELECT  orders.id
                FROM orders 
                WHERE orders.user_id=$user_id
                ORDER BY orders.id DESC
                LIMIT 1";
        $orderItem = $this->executeResult($sql);
        return $orderItem;
    }

    public function getAllOrder()
    {
        $sql = "select * from orders order by status asc, created_at desc";
        $data = $this->executeResult($sql);
        return $data;
    }

    public function getDetailOrder($idList)
    {
        $sql = "select order_details.*, product.title, product.photo 
                from order_details left join product on product.id = order_details.product_id 
                where order_details.order_id=$idList";
        $data = $this->executeResult($sql);
        return $data;
    }

    public function getOrderItem($id)
    {
        $sql = "select * from orders where id = $id";
        $orderItem = $this->executeResult($sql, true);
        return $orderItem;
    }

    public function updateStatus($id, $status)
    {
        $sql = "update orders set status = $status where id = $id";
        $this->execute($sql);
    }
}