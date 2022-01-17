const images = ["0dX0GLB.png","2DheJwM.jpeg","2LSt2tK.jpeg","2LVuFlW.jpeg","2Qhxoen.jpeg","2vfWsWX.jpeg","3T9uWHZ.jpeg","3TIgKCN.jpeg","3xt5NVp.jpeg","3z8hGAv.jpeg","4R7rzBv.jpeg","4gWNVsT.png","4oGCUvA.jpeg","506Mp3M.jpeg","5U3ePop.png","5hJ3zrQ.jpeg","5scV98A.jpeg","67DOx6p.jpeg","6D80lDI.jpeg","6LrN7hE.jpeg","6SJl6JN.png","7Y2O4g2.jpeg","7lSfNns.jpeg","7uELxut.png","8yB4dP9.jpeg","98YcFSy.jpeg","99jD5D5.jpeg","9QdWBUJ.jpeg","ADQzvx0.jpeg","AyggaZW.jpeg","B6FFpKJ.jpeg","B7SYvAZ.jpeg","BApno9H.jpeg","BC7Cs3G.jpeg","BNQ0Xfe.jpeg","BiW9Mut.jpeg","BioH1mo.jpeg","BtvcCcV.jpeg","BzruxVK.jpeg","CruA9b3.jpeg","DVp8S0o.jpeg","DiwCeEi.jpeg","E4fiP7n.jpeg","ESyzc9l.jpeg","EkwMACk.jpeg","EoTFmM7.jpeg","EpgmbqJ.jpeg","FDdbTm1.jpeg","FR0wJtU.jpeg","FUS5QWn.jpeg","FW1hmek.jpeg","FXekUi0.jpeg","FfDgM9C.jpeg","FmRPK6K.jpeg","GfsYH1r.jpeg","GvcAeJa.jpeg","HJ4CfXQ.jpeg","HSKAnKT.jpeg","Hut9F1V.jpeg","I943oxI.jpeg","IBGHHv3.jpeg","IdZ8SOr.jpeg","IhfslaA.jpeg","Iy8WoEY.jpeg","J8uaG3g.jpeg","JGfUHwt.jpeg","JIiI79x.jpeg","K0eZi5G.png","K6IVQgu.jpeg","KDFUy0W.jpeg","Ke5bPwS.jpeg","L2QCC6T.jpeg","LLWuihB.jpeg","LOPlhy4.jpeg","LdAo5Q5.jpeg","LeA3pxO.jpeg","LryeGq7.png","M7rPHu5.jpeg","Ma8Se8w.jpeg","N8P2UVq.jpeg","NflRhjM.jpeg","NkYr2dM.jpeg","No3OQG6.jpeg","O4YF3Yj.jpeg","OaLNSYV.jpeg","PwiCLFk.jpeg","Py8dEYw.jpeg","QMwMmhM.jpeg","QxbWs3Z.jpeg","Qziwklq.png","RDDYZPu.jpeg","RIx0Soh.jpeg","RSQVV0e.jpeg","RYXyo9Z.jpeg","RrM8POI.jpeg","S5u7o88.jpeg","SkhRrkT.jpeg","Sm5p6c7.jpeg","SqWo7SN.jpeg","Sw18HQs.jpeg","TGpmUFP.jpeg","Tb1WpEe.jpeg","V8ouhDP.jpeg","VADJumg.jpeg","VBPVL60.jpeg","VCN8GW5.jpeg","WMGhwXw.jpeg","WcTILA3.jpeg","WcVk2lQ.jpeg","X1QLYxt.jpeg","X37UO0F.jpeg","X8POJ9l.jpeg","XIVpDsE.jpeg","XZHESxt.jpeg","XhadPY2.jpeg","YFLiAB6.jpeg","YOcKWsg.jpeg","YPWY8eU.jpeg","YXfWFJS.jpeg","ZIEMjkS.jpeg","ZZ4dhGS.jpeg","ZmQJruw.jpeg","ZreOY5f.jpeg","bO4Cooz.jpeg","bSqpnHu.jpeg","bj1JS10.jpeg","bpiNf9b.png","c1xHFsL.jpeg","cALQqc1.png","cEdVT7P.jpeg","dnatGzG.jpeg","eIiQ5YT.jpeg","eMkZlJS.jpeg","fEBdRCi.jpeg","gDsaWtP.jpeg","gIvVf7F.jpeg","gOQkNMZ.jpeg","gRfedOt.jpeg","ghaIeYd.jpeg","gnsLD3v.jpeg","gyyFYiF.jpeg","hBtlKIg.jpeg","hMtUfZH.jpeg","hOOEuzZ.jpeg","hW2P0ux.jpeg","hYDijTX.jpeg","i6PLDf1.jpeg","iEQDMBa.jpeg","k8Bym4v.jpeg","kQGvbaP.png","knrq1i6.jpeg","loJMFYP.jpeg","m3lQeFJ.jpeg","mUMqclr.jpeg","nDecudH.jpeg","nJGxKek.jpeg","ngeeMfd.jpeg","nh6weAT.jpeg","oJWHqrr.jpeg","oSpuETE.jpeg","og7EG1w.png","oy16RYA.jpeg","oyIC7zT.jpeg","pTuINaY.jpeg","qCxYjm3.jpeg","qNTlKsR.jpeg","qcpgOuF.jpeg","r2WjuDd.jpeg","rC1d1OS.jpeg","rOmGsqI.jpeg","rpO5K1Z.jpeg","sMifOVx.jpeg","sT77XXf.jpeg","tT5mST0.jpeg","trcDM9d.jpeg","u4BXlQ1.jpeg","u6Fy9I5.jpeg","uAEn8Vd.jpeg","uReZLJ0.jpeg","uZCako1.jpeg","uenDKYw.jpeg","vPFoBfG.jpeg","voANjUX.jpeg","vogZ6Ef.jpeg","vvmyChX.jpeg","w8hfbVP.jpeg","wDjYrbq.jpeg","wt35Hhr.jpeg","wuuRpN8.jpeg","xSRZJ6p.jpeg","yzUfbIl.jpeg","zAOkPgQ.jpeg","zI3ckrD.jpeg","zYhMNKI.jpeg","zgJwrsm.png","zngSV3Y.jpeg","zxIYnV7.jpeg"]

let backgroundObject = document.getElementsByClassName('bg')[0]

const switchImage = (() => {
    let imageURL = "url(../pics/" + images[Math.floor(Math.random() * images.length)] + ")"

    console.log(imageURL)
    
    console.log(backgroundObject.style['background-image'])

    backgroundObject.style['background-image'] = imageURL

    console.log(backgroundObject.style['background-image'])
    
})

switchImage()