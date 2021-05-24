<?php
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, "https://g3xc1v5ana.execute-api.eu-west-1.amazonaws.com/production/metrics/day?ps=adsjsjrdro20g2s");
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        $result = curl_exec($ch);
        curl_close($ch); 
        echo $result;     