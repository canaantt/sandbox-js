# Lessons learned from the Cancer Genome: Coding and Non-Coding Drivers in Cacner
- Gad Getz, PhD MIT, MGH, Broad



## Cancer is a disease of the genome (and epigenome): Life history of a typical tumor
- Driver can beg genetic (CNV, indels, CNAs, SVs, pathogens) or epi (DNA methylation), coding or non-coding, from different mutational processes, to achieve cancer hallmarks (e.g. evade immune response), become resistant, activate/deactivate modelcular programs (Molecular subtype), hterogeneous, expose germline risk alleles

#### 0.1-100mut/Mb 5-20 Drivers

## list of examples:
...
- Evasion of Imune response: HLA-A/B/C, B2M
- Non-coding drivers: TERT promoter, amp/transloation of enhance (MYC, EVI1)
- Resistant mut: ESR1, EGFR T790M
- Order of eevnets; APC-> KRAS=> SMAD4=> TP53-> Gain 8q
- mutational processes: CpG->

...


## The two tasks of cancer genome projects:
- Characterization (individual)
- Interpretation (Population)

## Tools for discovering candidate cancer genes:

### MutSig: Score genes accodring to number and types of mutations
- Mutations in each tumor
- Mutation Tally
- Gene scores: significane threshold needs to be set, correct for multiple hopothesis testing

## One example 

#### [Problem] As sample size and/or mutation rate increases => significant gene list increases and contains 'fishy' genes
- whole-exome from 178 lung squamous cell carcinoma ~10/Mb, 450 genes q<0.1

#### [discovery] 

1. Mutation rates across cancer (~3000 WES) > 1000x frequency differences among cancers : Mike Lawrence, Petar Stojanov, Paz Polak et al. Nature (2013)
    - "Lego" Plot: transversions, transitions, right column 3'base =G, mutation rate per million sites increase from transverions to transitions, the most frequence is ACG ->, ATG

2. Mutation rate is lower in highly expressed genes: Transcription-coupled repair
3.  Important to model the background rate correctly: Frequency of somatic mutation correlates with DNA replication time

#### [New Result]
- Crucial to correct from 400 genes to 11 genes
-  Analysis fo 4,729 tumors, 21 tumor types and all tumors together => 254 significant genes, including 33 new cancer genes  (q<0.1)

> Have we completed the catalog of all cancer genes? NO!
 Lawrence et al. Nature (2014)

 > WHat is needed to complet the catalog? 
 - For 90% power to detect 90% ofe genes at frequency >= 2%
 - Need a mean of ~2000 samples (depends on tumor type)
 - To study 50 tumor types => analyze 50x2,000 = 100,000 tumors

> 25,000 exists (whole-exome) exist in the wolrd... that's why he is here...

## Sources of evidence for positive selection (Lawrence et al(2014) and Kamburov et al (2015))
- MutSig : 1-D 
    - burden
    - clustering
    - functional impact
- CLumps/EMPRINT: 3-D
    - Clustering
    - enriched in interface:  
- Each test procudes a p-values per genes;
    - Use False Discvoery Rate FDR <0.1
    - Chec 1-1 plot lies on diagnoal

## POLYSOLVER: HLA typing and somatic mutation detection

- [Problem] Alignment is not good enough because of the variation
- [Solution] 
    - first genotyping to normalization 
    - second call mutaion, throw away false mutation caused by alignment
    > Pan-cancer HLA mutational spectrum
- [result] Recurrent mutation sties indicate positive selection

> What about non-coding Driver? 

## Non-coding genomic elements
- Promoters, Enhancer, CTCT, Long non-coding RNAs, msll RNAs.. etc

### Mechanims of non-coding driver events: Promoters, Insulator, 3'UTR, Distal 

### Are there any driver promoter point mutations in breast cancer? Rheinbay et al. Nature (2.17)
- 360 breast cancers: ExomePlus (whoe exome + regulatory regions)
    - promoter -400bp to + 250bp from transcription start site (TSS)
    - ~25,000 promoters for coding and non-coding genes
- MutSigNC:
    - 9 Significantly mutated promoters in breast cancer (q<0.1)
    - 5 genes with mutations upstream of the TSS: there are few hot spots
    - 4 genes with...
< Did we miss additional events in the mutated sites due to low coverage?
    - Mutation Detection Sensitivity: 
        - Median detection sensitivity for mutated sites in significant
    - Ultra deep sequencing of FOXA1 hotspot idenfiiei additonal cases

### Experimental validation:
1. What ist eh eeffect of the promoter mut on protein expression?
2. Do nuclearproteins bind differently to a mutated vs. wt promoter probe? 

> A novel mechanism of FOXA1 activiation in breat cancer

### Hotspot mutation in the FOXA1 promoter is activating
- increased protein binding to mutatnt probe : luciferase

### FOXA1 is activated through E2F
- wt -> mutant: mutant fits better than the wt in terms of recruit E2F
- E2F1 consensus motif

### FOXA1 overexpression increases tolerance to fulvestrant (anti-ER) treatment in MCF7 cells

> What power did we have to discover significantly mutated promoters in our study? 
power of aroudn 70% detect promoters... around 5%... more patients


> Are promoter mutations just rare compared to coding driver events? 
 - Promoter hotspots are as frequent as coding hotspot
    - Single-site hotspot mutations
    - average mutation rate per megabase against density : compare promoter vs. protein-coding genes


> Summary (Part II)
- additional samples are needed to achieve statistical power for disovery signifcantly mutate dpromoters. These are required for us to be able to account for all genomic alteration..



# Next

## I. Promoting to cancer genes: target accelerator functioanl callsificaiton of Pan Cancer mutations
## II. Toward a complete catalog of cancer genes & pathways
    - more samlples, more tumors types
    - beyond point mutation in coding regions: 
        - WGS, 
        - Exome, WGS
        - RNA-seq, WGS
        - RRBS, BS-WGS
    - catalog of...

## III. Pan-cancer analysis of Whole genomes
- 2,800 tumor/normal.., world-wide 2,834 tumor/normal whole genomes from 48 projects in 14 jurisdictions, 20 primary cancer types
- PCAWG distributed computing: raw read from  53,000 compute days 145 years, 800TB 30 years HD movies

## IV. FireCloud: An open source platform for Collaborative cancer genome analysis at Scale : firecloud.org

Fiehose in the cloud -> fireCLoud
we started developing FireCLoud as one of the NCI cloud Pilots based on ideas and experience from our predecessor Broad-internal system FireHose using new Cloud tehnologies
UCSC, Berkeley, Broad

#### 1. Worksspace- isolated env for collaboratie analysis
    - Data + methods -> Rsults
    wriing logic, use the exome capture BAM
#### 2. Data Model: participant, sample, pair
   - Data model fits the sample model
   - sets of entities for population interpretaion 

1. Drivers of resistance by analyzing pre-treatment and resistant sample Example: RAF inhibition in BRAF V600E melanoma

2. Drivers of resistance by comparing pre-treatment population to blood biospies of metastatic cancers

[Problem] Patiens are not routinely biospied after they become resistan the therapy
[Solution]  Cell-free DNA analysis
    - Generate one library from one one sample -< use a portion for each analysis: ULP-WGS, quanify TFx
    ichorCNA, many things you can do with one sequencing
    - Use a portion for each analysis
    ichorCNA can accurately estimate TFx from ULP-WGS. 
    https://github.com/broadinstitute/ichorCNA

    - WES of cfDNA uncovers 88% of clonal mutations 
    - second blood draw, find another batch of overlap among the patients that were not discovered by the biospy, because the bioposy is so small, could be taken from differnet part of the body

clonal relationship btwn cfDNA and biopsies


cfDNA analysis is automated... ULP-WES is cheap
40% of meta breast and prostate cancer patietn have >0.1 tumor fraction in cfDNA, from a tube of blood...


Serial monitoring using ichorCNA + whole-exome sequencing

day 0, 51amp, 85 back to normal, 152, 218 samp


WES of cfDNA reveal same sif mutated genes as matched biospies (SSNVs)

